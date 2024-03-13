import { Schema, model } from "mongoose";

const tweetSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const TweetModel = model("Tweet", tweetSchema);

export default TweetModel;
