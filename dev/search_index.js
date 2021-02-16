var documenterSearchIndex = {"docs":
[{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"CurrentModule = Configurations","category":"page"},{"location":"advance/#Advanced-Usage","page":"Advanced Usage","title":"Advanced Usage","text":"","category":"section"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"For most use cases, the default API @option is sufficient, however, there are some specific cases requires one to use Configurations's advanced API.","category":"page"},{"location":"advance/#Alias","page":"Advanced Usage","title":"Alias","text":"","category":"section"},{"location":"advance/#Field-Name-Alias","page":"Advanced Usage","title":"Field Name Alias","text":"","category":"section"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"Sometimes, the struct field name is defined using a UTF-8 character such as Ω. It may cause incompatibility when converting to other format such as JSON/TOML or just a Dict for JSON-based REST API.","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"You can define an alias for the field in this case using the following syntax","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"@option struct MyType\n    \"alpha\"\n    α::Int\n    \"omega\"\n    Ω::Float64 = 1.0\nend","category":"page"},{"location":"advance/#Option-Type-Alias","page":"Advanced Usage","title":"Option Type Alias","text":"","category":"section"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"When there are multiple possible choices for an option-typed field, e.g","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"@option struct Options\n    options::Union{OptionA, OptionB}\nend","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"where OptionA and OptionB are also option types, one can specific which option type is it by using an alias when defining OptionA and OptionB","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"@option \"A\" struct OptionA\n    name::String\nend\n\n@option \"B\" struct OptionB\n    age::Int\nend","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"then you can create an Options from the following Julia Dict","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"Dict{String, Any}(\n    \"options\" => Dict{String, Any}(\n        \"A\" => Dict{String, Any}(\n            \"name\"=>\"Roger\",\n        )\n    )\n)","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"or by using the following TOML file,","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"[options.A]\nname=\"Roger\"","category":"page"},{"location":"advance/#Custom-Option-Macro","page":"Advanced Usage","title":"Custom Option Macro","text":"","category":"section"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"In some cases, you may not want all the features we defined by default in Configurations, such as the printing, etc.","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"In this case, you can construct your own macro using the code generation passes defined in Configurations. The code generation passes API starts with codegen_.","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"Configurations uses an intermediate representation to represent user defined option types, which is the OptionDef struct:","category":"page"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"OptionDef\nOptionDef(ex, alias)","category":"page"},{"location":"advance/#Configurations.OptionDef","page":"Advanced Usage","title":"Configurations.OptionDef","text":"OptionDef\n\nType to represent the option type definition.\n\n\n\n\n\n","category":"type"},{"location":"advance/#Configurations.OptionDef-Tuple{Any,Any}","page":"Advanced Usage","title":"Configurations.OptionDef","text":"OptionDef(ex, alias=nothing)\n\nCreate an OptionDef from given Julia Expr\n\n\n\n\n\n","category":"method"},{"location":"advance/#Builtin-Code-Generator","page":"Advanced Usage","title":"Builtin Code Generator","text":"","category":"section"},{"location":"advance/","page":"Advanced Usage","title":"Advanced Usage","text":"codegen_struct_def\ncodegen_kw_fn\ncodegen_field_default\ncodegen_field_alias\ncodegen_alias\ncodegen_create\ncodegen_isequal\ncodegen_show_toml_mime","category":"page"},{"location":"advance/#Configurations.codegen_struct_def","page":"Advanced Usage","title":"Configurations.codegen_struct_def","text":"codegen_struct_def(x::OptionDef)\n\ngenerate the struct (composite type) definition.\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_kw_fn","page":"Advanced Usage","title":"Configurations.codegen_kw_fn","text":"codegen_kw_fn(x::OptionDef)\n\nGenerate the keyword constructor function definition.\n\nExample\n\njulia> ex = :(struct Foo\n       x::Int = 2\n       end);\n\njulia> x = OptionDef(ex)\nstruct Foo\n  x::Int = 2\nend\n\njulia> codegen_kw_fn(x)\n:(function Foo(; x = 2)\n      Foo(x)\n  end)\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_field_default","page":"Advanced Usage","title":"Configurations.codegen_field_default","text":"codegen_field_default(x::OptionDef)\n\nGenerate the default value reflection method field_default.\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_field_alias","page":"Advanced Usage","title":"Configurations.codegen_field_alias","text":"codegen_field_alias(x::OptionDef)\n\nGenerate the field alias method field_alias.\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_alias","page":"Advanced Usage","title":"Configurations.codegen_alias","text":"codegen_alias(x::OptionDef)\n\nGenerate type alias method alias.\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_create","page":"Advanced Usage","title":"Configurations.codegen_create","text":"codegen_create(x::OptionDef)\n\nGenerate option type creation method create.\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_isequal","page":"Advanced Usage","title":"Configurations.codegen_isequal","text":"codegen_isequal(x::OptionDef)\n\nGenerate Base.:(==) to overload comparison operator to compare_options for given option type.\n\n\n\n\n\n","category":"function"},{"location":"advance/#Configurations.codegen_show_toml_mime","page":"Advanced Usage","title":"Configurations.codegen_show_toml_mime","text":"codegen_show_toml_mime(x::OptionDef)\n\nForward Base.show(io::IO, ::MIME\"application/toml\", x::YourOptionType) to to_toml.\n\n\n\n\n\n","category":"function"},{"location":"ref/","page":"References","title":"References","text":"CurrentModule = Configurations","category":"page"},{"location":"ref/#Reference","page":"References","title":"Reference","text":"","category":"section"},{"location":"ref/","page":"References","title":"References","text":"Modules = [Configurations]","category":"page"},{"location":"ref/#Configurations.Maybe","page":"References","title":"Configurations.Maybe","text":"maybe of type T or nothing\n\n\n\n\n\n","category":"type"},{"location":"ref/#Configurations.no_default","page":"References","title":"Configurations.no_default","text":"const for non default fields\n\n\n\n\n\n","category":"constant"},{"location":"ref/#Configurations.Field","page":"References","title":"Configurations.Field","text":"Field\n\nType to represent a field definition in option type.\n\n\n\n\n\n","category":"type"},{"location":"ref/#Configurations.OptionDef","page":"References","title":"Configurations.OptionDef","text":"OptionDef(ex, alias=nothing)\n\nCreate an OptionDef from given Julia Expr\n\n\n\n\n\n","category":"type"},{"location":"ref/#Configurations.alias-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.alias","text":"alias(::Type{OptionType}) -> String\n\nReturn the alias name of given OptionType.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen","text":"generate Julia AST from OptionDef.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_alias-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_alias","text":"codegen_alias(x::OptionDef)\n\nGenerate type alias method alias.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_convert-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_convert","text":"codegen_convert(x::OptionDef)\n\nGenerate Base.convert from AbstractDict{String} to the given option type.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_create-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_create","text":"codegen_create(x::OptionDef)\n\nGenerate option type creation method create.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_field_alias-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_field_alias","text":"codegen_field_alias(x::OptionDef)\n\nGenerate the field alias method field_alias.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_field_default-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_field_default","text":"codegen_field_default(x::OptionDef)\n\nGenerate the default value reflection method field_default.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_is_option-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_is_option","text":"codegen_is_option(x::OptionDef)\n\nGenerate the is_option method.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_isequal-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_isequal","text":"codegen_isequal(x::OptionDef)\n\nGenerate Base.:(==) to overload comparison operator to compare_options for given option type.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_kw_fn-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_kw_fn","text":"codegen_kw_fn(x::OptionDef)\n\nGenerate the keyword constructor function definition.\n\nExample\n\njulia> ex = :(struct Foo\n       x::Int = 2\n       end);\n\njulia> x = OptionDef(ex)\nstruct Foo\n  x::Int = 2\nend\n\njulia> codegen_kw_fn(x)\n:(function Foo(; x = 2)\n      Foo(x)\n  end)\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_show_text-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_show_text","text":"codegen_show_text(x::OptionDef)\n\nGenerate Base.show overloading for given type for the default printing syntax.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_show_toml_mime-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_show_toml_mime","text":"codegen_show_toml_mime(x::OptionDef)\n\nForward Base.show(io::IO, ::MIME\"application/toml\", x::YourOptionType) to to_toml.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.codegen_struct_def-Tuple{Configurations.OptionDef}","page":"References","title":"Configurations.codegen_struct_def","text":"codegen_struct_def(x::OptionDef)\n\ngenerate the struct (composite type) definition.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.compare_options-Tuple{Any,Any,Vararg{Any,N} where N}","page":"References","title":"Configurations.compare_options","text":"compare_options(a, b, xs...)::Bool\n\nCompare option types check if they are the same.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.create-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.create","text":"create(::Type{T}; kwargs...) where T\n\nCreate an instance of option type T from kwargs. Similar to the default keyword argument constructor, but one can use this to create custom keyword argument constructor with extra custom keywords.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.dictionalize-Tuple{Any}","page":"References","title":"Configurations.dictionalize","text":"dictionalize(x; include_defaults=false)\n\nConvert x to an OrderedDict.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.field_alias-Union{Tuple{T}, Tuple{Type{T},Symbol}} where T","page":"References","title":"Configurations.field_alias","text":"field_alias(::Type{T}, name::Symbol) where {T}\n\nReturn field name alias of given option types.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.field_aliases-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.field_aliases","text":"field_alias(::Type{T}) where T\n\nReturn all field name alias of given option types.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.field_default-Union{Tuple{T}, Tuple{Type{T},Symbol}} where T","page":"References","title":"Configurations.field_default","text":"field_default(::Type{T}, name::Symbol)\n\nReturn the default value of field name of an option type T.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.field_defaults-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.field_defaults","text":"field_defaults(::Type)\n\nReturn default values of given option types.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.from_dict-Union{Tuple{T}, Tuple{Type{T},AbstractDict{String,V} where V}} where T","page":"References","title":"Configurations.from_dict","text":"from_dict(::Type{T}, d::AbstractDict{String}; kw...) where T\n\nConvert dictionary d to an option type T, the valud of valid fields of T in this dictionary d can be override by keyword arguments.\n\nExample\n\njulia> @option struct OptionA\n           name::String = \"Sam\"\n           age::Int = 25\n       end\n\njulia> d = Dict{String, Any}(\n           \"name\" => \"Roger\",\n           \"age\" => 10,\n       );\n\njulia> from_dict(OptionA, d; age=25)\nOptionA(;\n    name = \"Roger\",\n    age = 25,\n)\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.from_dict_inner-Union{Tuple{T}, Tuple{Type{T},AbstractDict{String,V} where V}} where T","page":"References","title":"Configurations.from_dict_inner","text":"from_dict_inner(::Type{T}, d::AbstractDict{String}) where T\n\nInternal method to convert a dictionary (subtype of AbstractDict) to type T, this method will not check if T is an option type via is_option, and will not validate if all the required fields are available in the dict object.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.from_kwargs!-Union{Tuple{T}, Tuple{AbstractDict{String,V} where V,Type{T}}, Tuple{AbstractDict{String,V} where V,Type{T},Union{Nothing, Symbol}}} where T","page":"References","title":"Configurations.from_kwargs!","text":"from_kwargs!(d::AbstractDict{String}, ::Type{T}, prefix::Maybe{Symbol} = nothing; kw...) where T\n\nInternal method for inserting keyword arguments to given dictionary object d. It will overwrite existing keys in d if it is specified by keyword argument.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.from_kwargs-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.from_kwargs","text":"from_kwargs(::Type{T}; kw...) where T\n\nConvert keyword arguments to given option type T. See also from_dict.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.from_toml-Union{Tuple{T}, Tuple{Type{T},String}} where T","page":"References","title":"Configurations.from_toml","text":"from_toml(::Type{T}, filename::String; kw...) where T\n\nConvert a given TOML file filename to an option type T. Valid fields can be override by keyword arguments. See also from_dict.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.is_option-Tuple{Any}","page":"References","title":"Configurations.is_option","text":"is_option(x)\n\nCheck if x is an option type or not.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.keywords-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.keywords","text":"keywords(::Type{T}) where T -> Vector{Symbol}\n\nGet all the keywords of type T.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.option_convert-Union{Tuple{A}, Tuple{Type,Type{A},Any}} where A","page":"References","title":"Configurations.option_convert","text":"option_convert(::Type{OptionType}, ::Type{ValueType}, x) where {OptionType, ValueType}\n\nConvert x to type ValueType for option type OptionType. This is similar to Base.convert, when creating an instance of the option type, but one can use this to avoid type piracy.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.pick_union-Union{Tuple{T}, Tuple{Type{T},Any}} where T","page":"References","title":"Configurations.pick_union","text":"pick_union(::Type, x) -> type, value\n\nPick a type T and its corresponding value from a Union. For option types it should be a dictionary type. The value can be furthur converted to this type T via option_convert or Base.convert.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.split_body-Tuple{Expr}","page":"References","title":"Configurations.split_body","text":"split_body(ex::Expr) -> fields::Vector{Field}, misc::Vector{Any}\n\nSplit the fields of option type declaration and misc (such as inner constructors etc.).\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.split_name-Tuple{Expr}","page":"References","title":"Configurations.split_name","text":"split_name(ex::Expr) -> name, typevars, supertype\n\nSplit the name, type parameters and supertype definition from struct declaration head.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.to_dict-Tuple{Any}","page":"References","title":"Configurations.to_dict","text":"to_dict(option; include_defaults=false) -> OrderedDict\n\nConvert an option to an OrderedDict. \n\ntips: Tips\nto_dict does not export fields that are of the same values as the defaults.  In most cases, this should be the default behaviour, and users should not use include_defaults, however,  this can be overridden by changing include_defaults to true.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.to_toml-Tuple{Any,IO,Any}","page":"References","title":"Configurations.to_toml","text":"to_toml([f::Function], io::IO, option; sorted=false, by=identity, include_defaults=false)\n\nConvert an instance option of option type to TOML and write it to IO. See also TOML.print.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.to_toml-Tuple{Any,String,Any}","page":"References","title":"Configurations.to_toml","text":"to_toml([f::Function], filename::String, option; sorted=false, by=identity, include_defaults=false)\n\nConvert an instance option of option type to TOML and write it to filename. See also TOML.print.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.to_toml-Tuple{Any}","page":"References","title":"Configurations.to_toml","text":"to_toml(x; sorted=false, by=identity, include_defaults=false)\n\nConvert an instance x of option type to TOML and write it to String. See also TOML.print. \n\nto_toml does not export fields that are of the same values as the defaults. This can be  overridden by changing include_defaults to true.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.toml_convert-Tuple{Type,Any}","page":"References","title":"Configurations.toml_convert","text":"toml_convert(::Type, x)\n\nA convenient function for converting common Julia types to TOML compatible types. One can overload the first argument to custom the behaviour for a specific option type.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.toml_convert-Union{Tuple{Type{T}}, Tuple{T}} where T","page":"References","title":"Configurations.toml_convert","text":"toml_convert(::Type{T}) where T\n\nCurried version of toml_convert.\n\n\n\n\n\n","category":"method"},{"location":"ref/#Configurations.@option-Tuple{Any}","page":"References","title":"Configurations.@option","text":"@option [alias::String] <struct def>\n\nDefine an option struct type. This will auto-generate methods that parse a given Dict{String} object (the keys must be of type String) into an instance of the struct type you defined. One can use alias string to distinguish multiple possible option type for the same field.\n\nExample\n\nOne can define option type via @option macro with or without an alias.\n\njulia> \"Option A\"\n       @option \"option_a\" struct OptionA\n           name::String\n           int::Int = 1\n       end\n\njulia> \"Option B\"\n       @option \"option_b\" struct OptionB\n           opt::OptionA = OptionA(;name = \"Sam\")\n           float::Float64 = 0.3\n       end\n\nand convert a dict to an option type via from_dict.\n\njulia> d = Dict{String, Any}(\n           \"opt\" => Dict{String, Any}(\n               \"name\" => \"Roger\",\n               \"int\" => 2,\n           ),\n           \"float\" => 0.33\n       );\n\njulia> option = from_dict(OptionB, d)\nOptionB(;\n    opt = OptionA(;\n        name = \"Roger\",\n        int = 2,\n    ),\n    float = 0.33,\n)\n\nwhen there are multiple possible option type for one field, one can use the alias to distinguish them\n\njulia> @option struct OptionD\n           opt::Union{OptionA, OptionB}\n       end\n\njulia> d1 = Dict{String, Any}(\n               \"opt\" => Dict{String, Any}(\n                   \"option_b\" => d\n               )\n           );\n\njulia> from_dict(OptionD, d1)\nOptionD(;\n    opt = OptionB(;\n        opt = OptionA(;\n            name = \"Roger\",\n            int = 2,\n        ),\n        float = 0.33,\n    ),\n)\n\n\n\n\n\n","category":"macro"},{"location":"#Configurations","page":"Home","title":"Configurations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: CI) (Image: codecov)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Configurations & Options made easy.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<p>\nConfigurations is a &nbsp;\n    <a href=\"https://julialang.org\">\n        <img src=\"https://raw.githubusercontent.com/JuliaLang/julia-logo-graphics/master/images/julia.ico\" width=\"16em\">\n        Julia Language\n    </a>\n    &nbsp; package. To install Configurations,\n    please <a href=\"https://docs.julialang.org/en/v1/manual/getting-started/\">open\n    Julia's interactive session (known as REPL)</a> and press <kbd>]</kbd> key in the REPL to use the package mode, then type the following command\n</p>","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add Configurations","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides a macro @option to let you define structs to represent options/configurations, and serialize between different option/configuration file format.","category":"page"},{"location":"","page":"Home","title":"Home","text":"@option","category":"page"},{"location":"#Configurations.@option","page":"Home","title":"Configurations.@option","text":"@option [alias::String] <struct def>\n\nDefine an option struct type. This will auto-generate methods that parse a given Dict{String} object (the keys must be of type String) into an instance of the struct type you defined. One can use alias string to distinguish multiple possible option type for the same field.\n\nExample\n\nOne can define option type via @option macro with or without an alias.\n\njulia> \"Option A\"\n       @option \"option_a\" struct OptionA\n           name::String\n           int::Int = 1\n       end\n\njulia> \"Option B\"\n       @option \"option_b\" struct OptionB\n           opt::OptionA = OptionA(;name = \"Sam\")\n           float::Float64 = 0.3\n       end\n\nand convert a dict to an option type via from_dict.\n\njulia> d = Dict{String, Any}(\n           \"opt\" => Dict{String, Any}(\n               \"name\" => \"Roger\",\n               \"int\" => 2,\n           ),\n           \"float\" => 0.33\n       );\n\njulia> option = from_dict(OptionB, d)\nOptionB(;\n    opt = OptionA(;\n        name = \"Roger\",\n        int = 2,\n    ),\n    float = 0.33,\n)\n\nwhen there are multiple possible option type for one field, one can use the alias to distinguish them\n\njulia> @option struct OptionD\n           opt::Union{OptionA, OptionB}\n       end\n\njulia> d1 = Dict{String, Any}(\n               \"opt\" => Dict{String, Any}(\n                   \"option_b\" => d\n               )\n           );\n\njulia> from_dict(OptionD, d1)\nOptionD(;\n    opt = OptionB(;\n        opt = OptionA(;\n            name = \"Roger\",\n            int = 2,\n        ),\n        float = 0.33,\n    ),\n)\n\n\n\n\n\n","category":"macro"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MIT License","category":"page"},{"location":"quick-start/#Quick-Start","page":"Quick Start","title":"Quick Start","text":"","category":"section"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"Create an option type with macro @option as following","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"@option struct YouOptionType <: YourAbstractType\n   a::Int = 1\n   b::Float64 # required field\nend","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"then you can use this as an option type, it can let you:","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"convert an option type defined in Julia to a markup language, such as TOML, JSON\nread from plain AbstractDict{String}, TOML, JSON etc. and convert the data to the option type\ncompose several option types together","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"You can easily create hierarchical struct types as following","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"julia> \"Option A\"\n       @option \"option_a\" struct OptionA\n           name::String\n           int::Int = 1\n       end\n\njulia> \"Option B\"\n       @option \"option_b\" struct OptionB\n           opt::OptionA = OptionA(;name = \"Sam\")\n           float::Float64 = 0.3\n       end","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"and convert a dict to an option type via from_dict.","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"julia> d = Dict{String, Any}(\n           \"opt\" => Dict{String, Any}(\n               \"name\" => \"Roger\",\n               \"int\" => 2,\n           ),\n           \"float\" => 0.33\n       );\n\njulia> option = from_dict(OptionB, d)\nOptionB(;\n    opt = OptionA(;\n        name = \"Roger\",\n        int = 2,\n    ),\n    float = 0.33,\n)","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"when there are multiple possible option type for one field, one can use the alias to distinguish them","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"julia> @option struct OptionD\n           opt::Union{OptionA, OptionB}\n       end\n\njulia> d1 = Dict{String, Any}(\n               \"opt\" => Dict{String, Any}(\n                   \"option_b\" => d\n               )\n           );\n\njulia> from_dict(OptionD, d1)\nOptionD(;\n    opt = OptionB(;\n        opt = OptionA(;\n            name = \"Roger\",\n            int = 2,\n        ),\n        float = 0.33,\n    ),\n)\n\njulia> using Configurations\n\njulia> @option struct OptionA\n           name::String\n           int::Int = 1\n       end\n\njulia> @option struct OptionB\n           opt::OptionA = OptionA(;name = \"Sam\")\n           float::Float64 = 0.3\n       end\n\njulia> d = Dict(\n           \"opt\" => Dict(\n               \"name\" => \"Roger\",\n               \"int\" => 2,\n           ),\n           \"float\" => 0.33\n       )\nDict{String, Any} with 2 entries:\n  \"opt\"   => Dict{String, Any}(\"int\"=>2, \"name\"=>\"Roger\")\n  \"float\" => 0.33\n\njulia> option = from_dict(OptionB, d)\nOptionB(;\n  opt = OptionA(;\n    name = \"Roger\",\n    int = 2,\n  ),\n  float = 0.33,\n)","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"Or you can also create it from keyword arguments, e.g","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"julia> from_kwargs(OptionB; opt_name=\"Roger\", opt_int=2, float=0.33)\nOptionB(;\n    opt = OptionA(;\n        name = \"Roger\",\n        int = 2,\n    ),\n    float = 0.33,\n)","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"for option types you can always convert AbstractDict to a given option type, or convert them back to dictionary via to_dict, e.g","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"julia> Configurations.to_dict(option)\nOrderedDict{String, Any} with 2 entries:\n  \"opt\"   => OrderedDict{String, Any}(\"name\"=>\"Roger\", \"int\"=>2)\n  \"float\" => 0.33","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"for serialization, you can use the builtin TOML support","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"julia> to_toml(option)\n\"float = 0.33\\n\\n[opt]\\nname = \\\"Roger\\\"\\nint = 2\\n\"","category":"page"},{"location":"quick-start/","page":"Quick Start","title":"Quick Start","text":"Or serialize it to other format from OrderedDict.","category":"page"}]
}
