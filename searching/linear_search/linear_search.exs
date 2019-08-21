defmodule LinearSearch do
  def linear_search(list, item) do
    linear_search(list, item, 0)
  end

  defp linear_search([head | []], item, current_index) do
    if head == item, do: current_index, else: -1
  end

  defp linear_search([head | tail], item, current_index) do
    if head == item, do: current_index, else: linear_search(tail, item, current_index + 1)
  end
end

# This imports the helper file
Code.require_file("../helpers/list_builder.exs", __DIR__)

test_list_1 = Helpers.ListBuilder.ordered_sequential_array(0, 100)

# => 2
IO.inspect(LinearSearch.linear_search(test_list_1, 2))

# => 97
IO.inspect(LinearSearch.linear_search(test_list_1, 97))

# => -1
IO.inspect(LinearSearch.linear_search(test_list_1, 101))
