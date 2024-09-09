import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sqlConfig";

interface ProfileAttributes {
    profile_id: number;
    user_id: string;
    address: string;
    phone?: number;
    social_media?: string;
    created_at?: Date;
    updated_at?: Date;
}

interface ProfileCreationAttributes
    extends Optional<
        ProfileAttributes,
        "profile_id" | "created_at" | "updated_at"
    > {}

export class ProfileModel
    extends Model<ProfileAttributes, ProfileCreationAttributes>
    implements ProfileAttributes
    {
    public profile_id!: number;
    public user_id!: string;
    public address!: string;
    public phone?: number;
    public social_media?: string;
    public created_at?: Date;
    public updated_at?: Date;
    }

    ProfileModel.init(
    {
        profile_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        },
        user_id: {
        type: DataTypes.UUID,
        unique:true,
        allowNull: false,
        references: {
            model: "users",
            key: "user_id",
        },
        onDelete: "CASCADE",
        },
        address: {
        type: DataTypes.STRING,
        allowNull: true,
        },
        phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
        },
        social_media: {
        type: DataTypes.STRING,
        allowNull: true,
        },
        created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        },
        updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "ProfileModel",
        tableName: "profile",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
