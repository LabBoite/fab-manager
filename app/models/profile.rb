# frozen_string_literal: true

# Personal data attached to an user (like first_name, date of birth, etc.)
class Profile < ActiveRecord::Base
  belongs_to :user
  has_one :user_avatar, as: :viewable, dependent: :destroy
  accepts_nested_attributes_for :user_avatar,
                                allow_destroy: true,
                                reject_if: proc { |attributes| attributes['attachment'].blank? }

  validates :first_name, presence: true, length: { maximum: 30 }
  validates :last_name, presence: true, length: { maximum: 30 }
  validates_numericality_of :phone, only_integer: false, allow_blank: true

  after_commit :update_invoicing_profile, if: :invoicing_data_was_modified?, on: [:update]

  def full_name
    # if first_name or last_name is nil, the empty string will be used as a temporary replacement
    (first_name || '').humanize.titleize + ' ' + (last_name || '').humanize.titleize
  end

  def to_s
    full_name
  end

  def self.mapping
    # we protect some fields as they are designed to be managed by the system and must not be updated externally
    blacklist = %w[id user_id created_at updated_at]
    # model-relationships must be added manually
    additional = [%w[avatar string], %w[address string], %w[organization_name string], %w[organization_address string]]
    Profile.column_types
           .map { |k, v| [k, v.type.to_s] }
           .delete_if { |col| blacklist.include?(col[0]) }
           .concat(additional)
  end

  private

  def invoicing_data_was_modified?
    first_name_changed? or last_name_changed? or new_record?
  end

  def update_invoicing_profile
    raise NoProfileError if user.invoicing_profile.nil?

    user.invoicing_profile.update_attributes(
      first_name: first_name,
      last_name: last_name
    )
  end

end
