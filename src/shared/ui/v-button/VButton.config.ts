const buttonVariants: { [key: string]: string } = {
  red: 'bg-red-500 hover:bg-red-600 outline-red-700',
  green: 'bg-green-500 hover:bg-green-600 outline-green-700',
  blue: 'bg-blue-500 hover:bg-blue-600 outline-blue-700',
};

const contentVariants: { [key: string]: string } = {
  text: 'px-3 py-2',
  icon: 'p-2',
};

export const classes = (content: string, variant: string) => {
  return [
    'cursor-pointer rounded-lg text-white shadow-lg shadow-slate-500/10 transition-colors outline-offset-3',
    contentVariants[content],
    buttonVariants[variant],
  ];
};
