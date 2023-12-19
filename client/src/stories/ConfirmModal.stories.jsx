import { ConfirmModal } from "../components";

export default {
  title: "Modal/ConfirmModal component",
  component: ConfirmModal,

  tags: ["autodocs"],
};

export const Primary = {
  args: {
    open: false,
    title: "My fovorite movies",
    url: "http://localhost:3000/recommend?title='my movies'&ids=232,345",
    onClose: () => {},
  },
};
