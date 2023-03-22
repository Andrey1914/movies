import { Oval } from "react-loader-spinner";
import { Box } from "../Box";

export default function LoaderOval() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={7}>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Box>
  );
}
