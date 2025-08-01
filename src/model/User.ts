import mongoose, {Schema ,Document} from "mongoose";


export interface Message extends Document {
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    VerifyCode: string;
    VerifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    VerifyCode: {
        type: String,
        required: [true, 'Verify code is required'],
    },
    VerifyCodeExpiry: {
        type: Date,
        required: [true, 'Verify code Expiry is required'],
    },
    isVerified: {
        type: Boolean,
        default: false,
    }, 
    isAcceptingMessages: {
        type: Boolean,
        default: true,
    }, 
    messages:[MessageSchema] 
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;