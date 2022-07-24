const ProblemsData = [
    {
        title: "CCC '04 J3 - Smile with Similes",
        description: 'A simile is a combination of an adjective and noun that produces a phrase such as "Easy as pie" or "Cold as ice". \n\n Write a program to input n adjectives and m nouns, and print out all possible similes. The first two lines of input will provide the values of n and m, in that order followed, one per line, by n adjectives and m nouns. \n\n Your program may output the similes in any order.',
        sampleInput: '3\n2\nEasy\nSmart\nSoft\npie\nrock',
        sampleOutput: 'Easy as pie\nEasy as rock\nSmart as pie\nSmart as rock\nSoft as pie\nSoft as rock',
        functionInput: [
            3,
            2,
            "Easy",
            "Smart",
            "Soft",
            "pie",
            "rock"
        ],
        functionOutput: [
            "Easy as pie",
            "Easy as rock",
            "Smart as pie",
            "Smart as rock",
            "Soft as pie",
            "Soft as rock"
        ]
    },
    {
        title: "CCC '04 J1 - Squares",
        description: 'Gigi likes to play with squares. She has a collection of equal-sized square tiles. Gigi wants to arrange some or all of her tiles on a table to form a solid square. What is the side length of the largest possible square that Gigi can build? \n\n For example, when Gigi has 9 tiles she can use them all to build a square whose side length is 3. But when she has only 8 tiles, the largest square that she can build has side length 2. \n\n Write a program that inputs the number of tiles and then prints out the maximum side length. You may assume that the number of tiles is less than ten thousand.',
        sampleInput: '9',
        sampleOutput: 'The largest square has side length 3.',
        functionInput: 9,
        functionOutput: "The largest square has side length 3."
    },
    {
        title: "CCC '13 J2 - Rotating letters",
        description: 'An artist wants to construct a sign whose letters will rotate freely in the breeze. In order to do this, she must only use letters that are not changed by rotation of 180 degrees: I, O, S, H, Z, X, and N. \n\n Write a program that reads a word and determines whether the word can be used on the sign.',
        sampleInput: 'SHINS',
        sampleOutput: 'YES',
        functionInput: [],
        functionOutput: []
    },


]

export default ProblemsData