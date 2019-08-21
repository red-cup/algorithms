
module ArrayHelper  
  def self.ordered_sequential_array(min: 0, max: 100)
    return [] if min > max
    (min..max).to_a
  end
  
  def self.ordered_random_array(min: 0, max: 100)
    return [] if min > max
    (min..max).map {|x| rand(min..max)}.sort
  end
  
  def self.unordered_random_array(min: 0, max: 100)
    return [] if min > max
    (min..max).map {|x| rand(min..max)}
  end
  
end
