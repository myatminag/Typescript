const person: {
    name: string;
    age: number;
} = {
    name: "Myat Min Aung",
    age: 21,
};

console.log(person.name);

// Tuple => Fixed length array

const nestedObjects: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    from: {
        country: string;
        city: string;
    };
} = {
    name: "Myat Min Aung",
    age: 21,
    hobbies: ["swimming, football"],
    role: [1, "developer"],
    from: {
        country: "Myanmar",
        city: "Yangon",
    },
};

console.log(nestedObjects.age);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of nestedObjects.hobbies) {
    console.log(hobby);
}

// Enum => Automatically enumerated global constant identifiers
enum Role {
    ADMIN, // 0
    AUTHOR, // 1
    WORKER, // 2
}

const author = {
    name: "Myat Min Aung",
    age: 21,
    role: Role.ADMIN,
};

if (author.role === Role.ADMIN) {
    console.log("A admin ");
}
