class Stylesheet < ActiveRecord::Base
  validates_presence_of :contents

  def rebuild!
    return unless Stylesheet.primary && Stylesheet.secondary

    update(contents: Stylesheet.css)
  end

  def self.build_sheet!
    return unless Stylesheet.primary && Stylesheet.secondary

    if Stylesheet.first
      Stylesheet.first.rebuild!
    else
      Stylesheet.create!(contents: Stylesheet.css)
    end
  end

  def self.primary
    Setting.find_by(name: 'main_color')&.value
  end

  def self.secondary
    Setting.find_by(name: 'secondary_color')&.value
  end

  def self.primary_light
    Stylesheet.primary.paint.lighten(10)
  end

  def self.primary_dark
    Stylesheet.primary.paint.darken(20)
  end

  def self.secondary_light
    Stylesheet.secondary.paint.lighten(10)
  end

  def self.secondary_dark
    Stylesheet.secondary.paint.darken(20)
  end

  def self.primary_with_alpha(alpha)
    Stylesheet.primary.paint.to_rgb.insert(3, 'a').insert(-2, ", #{alpha}")
  end

  def self.css
    ".bg-red { background-color: #cb1117; }"
  end
end
