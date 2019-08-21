defmodule Helpers.ListBuilder do
  def ordered_sequential_array(min, max) when min > max, do: []

  def ordered_sequential_array(min, max), do: Enum.map(min..max, & &1)

  #   def self.ordered_sequential_array(min: 0, max: 100)
  #   return [] if min > max
  #   (min..max).to_a
  # end

  # def self.ordered_random_array(min: 0, max: 100)
  #   return [] if min > max
  #   (min..max).map {|x| rand(min..max)}.sort
  # end

  # def self.unordered_random_array(min: 0, max: 100)
  #   return [] if min > max
  #   (min..max).map {|x| rand(min..max)}
  # end
end
