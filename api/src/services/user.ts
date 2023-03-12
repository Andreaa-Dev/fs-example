import User, { UserDocument } from "../model/User";

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

const getUserById = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findById(userId);
  return foundUser;
};

const findUserByEmail = async (
  userEmailFromRequest: string
): Promise<UserDocument | null> => {
  const foundUser = User.findOne({ email: userEmailFromRequest });
  return foundUser;
};

const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  });
  return foundUser;
};

export default {
  createUser,
  getUserById,
  findUserByEmail,
  updateUser,
};
