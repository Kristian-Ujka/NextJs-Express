import { useAuth } from "@/components/AuthProvider/AuthProvider";
import { useRouter } from "next/router";

const SecurePage = () => {
  const { token } = useAuth();
  const router = useRouter();

  if (!token) {
    router.push("/login");
    return null;
  }

  return <div>Contenuto protetto</div>;
};

export default SecurePage;
