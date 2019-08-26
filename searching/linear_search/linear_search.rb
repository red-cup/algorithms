require_relative('../helpers/array_builder.rb')

def linear_search(array, item)
  iteration_count = 0
  array.each_with_index do |element, idx| 
    iteration_count += 1
    if element == item
      puts "# of iterations to find item index: #{iteration_count}" 
      return idx 
      
    end
    puts "# of iterations to find item index: #{iteration_count}" 
  return -1
end

test_array_1 = ArrayHelper.ordered_sequential_array(min: 0,  max: 100)

puts linear_search(test_array_1, 2) # => 2
puts linear_search(test_array_1, 97) # => 97
puts linear_search(test_array_1, 101) # => -1