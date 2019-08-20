
class ArrayHelper  
  def self.orderedSequentialArray(min: 0, max: 100)
    return [] if min > max
    (min..max).to_a
  end
  
  def self.orderedRandomArray(min: 0, max: 100)
    return [] if min > max
    (min..max).map {|x| rand(min..max)}.sort
  end
  
  def self.unorderedRandomArray(min: 0, max: 100)
    return [] if min > max
    (min..max).map {|x| rand(min..max)}
  end
  
end
