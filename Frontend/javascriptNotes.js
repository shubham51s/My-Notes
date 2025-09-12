/*

    # Variables (var, let & const):
        1. var (legacy keyword):
            - Function scoped: it is available anywhere within the same function it is declared in
            - Can be re-assign (update) & redeclare
            - Hoisted & initialized with undefined
            - It is not block scoped: blocks like if, for & while statements do not create a new scope for var variables

        2. let:
            - Block scoped ({}): it is only accesible within the nearest curly braces, such as inside if block or for loop
            - Can be re-assign (update) but not redeclare
            - Hoisted but not initialized (temporal dead zone)
                let declarations are also hoisted to the top of their block. However, unlike var, they are not initialized. The period from the start of the block until the declaration is executed is called the Temporal Dead Zone (TDZ). Accessing the variable in the TDZ will result in a ReferenceError

        3. const:
            - Block scoped
            - cannot re-assign (update) or redeclare
            - Hoisted but not Initialized (Temporal Dead Zone)


    # Javascript is a dynamically typed language: variables are not bound to a specific type when declared
        
    # Data types: 

        1. Primitive types (value types): 
            - This are immutable (cannot be changed) & stored directly in memory. When assigned to a variable contains the actual value
            - example: String, Number, BigInt, Boolean, Undefined, Null, Symbol
        
        2. Reference type (Objects)
            - This are mutable & stored by reference. When assigned to variable, a variable contains a reference (memory address) to the actual data
            - example: Object, Array, Function, Date

    # Functions

        1. Function declaration:
            - it starts with function keyword
            - it must have the function name
            - it does not require a variable assignment
            - fully hoisted, can be called before it is defined

        2. Function expression:
            - the function itself can be either named or anonymous
            - can be stored in a variable assignment
            - not hoisted

        Immediately Invoked Function Expressions (IIFEs):
            - it's a js function which runs as soon as it is defined. It is also known as self-executing anonymous function
            - it contains 2 major parts
                1. a function expression
                2. immediately calling the function expression
            - IIFEs are commonly used to create private scope

    # DOM (Document Object Model):
        - The DOM is the programming interface for web documents. It represents the page so that program can change the document structure, style & content. The DOM represents the document as nodes & objects that way programming languages can interact with the page

        
        https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction



























*/
