var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Interface","page":"API","title":"Interface","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"inverse","category":"page"},{"location":"api/#InverseFunctions.inverse","page":"API","title":"InverseFunctions.inverse","text":"inverse(f)\n\nReturn the inverse of function f.\n\ninverse supports mapped and broadcasted functions (via Base.Fix1) and function composition (requires Julia >= 1.6).\n\nExamples\n\njulia> foo(x) = inv(exp(-x) + 1);\n\njulia> inv_foo(y) = log(y / (1 - y));\n\njulia> InverseFunctions.inverse(::typeof(foo)) = inv_foo;\n\njulia> InverseFunctions.inverse(::typeof(inv_foo)) = foo;\n\njulia> x = 4.2;\n\njulia> inverse(foo)(foo(x)) ≈ x\ntrue\n\njulia> inverse(inverse(foo)) === foo\ntrue\n\njulia> broadcast_foo = Base.Fix1(broadcast, foo);\n\njulia> X = rand(10);\n\njulia> inverse(broadcast_foo)(broadcast_foo(X)) ≈ X\ntrue\n\njulia> bar = log ∘ foo;\n\njulia> VERSION < v\"1.6\" || inverse(bar)(bar(x)) ≈ x\ntrue\n\nImplementation\n\nImplementations of inverse(::typeof(f)) have to satisfy\n\ninverse(f)(f(x)) ≈ x for all x in the domain of f, and\ninverse(inverse(f)) is equivalent (ideally identical/equal) to f.\n\nYou can check your implementation with InverseFunctions.test_inverse.\n\n\n\n\n\n","category":"function"},{"location":"api/#Test-utility","page":"API","title":"Test utility","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"InverseFunctions.test_inverse","category":"page"},{"location":"api/#InverseFunctions.test_inverse","page":"API","title":"InverseFunctions.test_inverse","text":"InverseFunctions.test_inverse(f, x; inv_inv_test = ===, kwargs...)\n\nCheck if inverse(f) is implemented correctly.\n\nThe function checks if\n\ninverse(f)(f(x)) ≈ x and\ninv_inv_test(inverse(inverse(f)), f).\n\nWith inv_inv_test = ≈, tests if the result of inverse(inverse(f))(x) is equal or approximately equal to f(x).\n\nkwargs... are passed to isapprox.\n\n\n\n\n\n","category":"function"},{"location":"LICENSE/#LICENSE","page":"LICENSE","title":"LICENSE","text":"","category":"section"},{"location":"LICENSE/","page":"LICENSE","title":"LICENSE","text":"using Markdown\nMarkdown.parse_file(joinpath(@__DIR__, \"..\", \"..\", \"LICENSE.md\"))","category":"page"},{"location":"#InverseFunctions.jl","page":"Home","title":"InverseFunctions.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"InverseFunctions","category":"page"},{"location":"#InverseFunctions","page":"Home","title":"InverseFunctions","text":"InverseFunctions\n\nLightweight package that defines an interface to invert functions.\n\n\n\n\n\n","category":"module"},{"location":"","page":"Home","title":"Home","text":"This package defines the function inverse. inverse(f) returns the inverse function of a function f, so that inverse(f)(f(x)) ≈ x.","category":"page"},{"location":"","page":"Home","title":"Home","text":"inverse supports mapped/broadcasted functions (via Base.Fix1) and (on Julia >=v1.6) function composition.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Implementations of inverse(f) for identity, inv, adjoint and transpose as well as for exp, log, exp2, log2, exp10, log10, expm1 and log1p are included.","category":"page"}]
}
