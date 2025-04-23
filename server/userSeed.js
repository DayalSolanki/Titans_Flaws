import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';

const userRegister = async () => {
    await connectToDatabase(); // 🔄 added await for proper DB connection
    try {
        const hashPassword = await bcrypt.hash("password", 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });

        await newUser.save();
        console.log("Admin user created.");
    } catch (error) {
        console.log("Error seeding admin:", error);
    }
};

userRegister(); // ✅ run the function
