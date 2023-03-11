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

// function: 2 job: create new user / find user by email
const createOrFindUserByEmail = async (
  payload: Partial<UserDocument>
): Promise<UserDocument | null> => {
  console.log(payload, "payload");
  // email to find user by email
  const userEmail = payload.email;
  const result = await User.findOne({ email: userEmail });

  if (result) {
    return result;
  } else {
    // create new user
    const user = new User({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
    });
    return user.save();
  }
};
const updateUserWithNewPassword = async (
  userEmail: string,
  newPassword: string
): Promise<UserDocument | null> => {
  const user = await User.findOneAndUpdate(
    { email: userEmail },
    { passWord: newPassword },
    {
      new: true,
    }
  );
  return user;
};
export default {
  createUser,
  getUserById,
  findUserByEmail,
  updateUser,
  createOrFindUserByEmail,
  updateUserWithNewPassword,
};
