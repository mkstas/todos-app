const buttonVariants: { [key: string]: string } = {
  red: 'bg-red-500 hover:bg-red-600 outline-red-600',
  green: 'bg-green-500 hover:bg-green-600 outline-green-600',
  blue: 'bg-blue-500 hover:bg-blue-600 outline-blue-600',
};

const contentVariants: { [key: string]: string } = {
  text: 'px-4 py-2.25',
  icon: 'p-2.25',
};

export const classes = (content: string, variant: string) => {
  return [
    'cursor-pointer rounded-xl font-medium text-white transition-colors outline-offset-3',
    contentVariants[content],
    buttonVariants[variant],
  ];
};
