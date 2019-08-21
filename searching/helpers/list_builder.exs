defmodule Helpers.ListBuilder do
  def ordered_sequential_list(min, max) when min > max, do: []

  def ordered_sequential_list(min, max), do: Enum.map(min..max, & &1)

  def ordered_random_list(min, max) when min > max, do: []

  def ordered_random_list(min, max) do
    Enum.map(min..max, fn _ -> Enum.random(min..max) end)
    |> Enum.sort()
  end

  def unordered_random_list(min, max) when min > max, do: []

  def unordered_random_list(min, max) do
    Enum.map(min..max, fn _ -> Enum.random(min..max) end)
  end
end
