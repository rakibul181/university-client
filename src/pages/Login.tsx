import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "0001",
      password: "admin12345",
    },
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: { userId: string; password: string }) => {
    const toastID = toast.loading("Logging in");
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    try {
      const result = await login(userInfo).unwrap();
      const user = verifyToken(result.data.accessToken) as TUser;
      dispatch(
        setUser({
          user,
          token: result.data.accessToken,
        })
      );
      toast.success("Logged in", { id: toastID, duration: 2000 });
      navigate(`./${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastID, duration: 2000 });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
