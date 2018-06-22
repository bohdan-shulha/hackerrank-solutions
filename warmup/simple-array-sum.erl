simple_array_sum(Ar) ->
    lists:foldl(fun(X, Sum) -> X + Sum end, 0, Ar).
