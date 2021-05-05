const useInputFormatter = (quaPerFragment: number[], fieldName: string, separator = '-') => {
  const formatOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void
  ) => {
    let val = e.target.value;

    const sum = quaPerFragment.reduce((prev, cur) => {
      if (val.charAt(prev) !== separator && prev <= val.length) {
        val = `${val.slice(0, prev)}${separator}${val.slice(prev)}`;
      }
      return prev + cur + 1;
    });

    setFieldValue(fieldName, val);

    if (val.length > sum) setFieldValue(fieldName, e.target.value.slice(0, val.length - 1));
  };

  const formatOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void,
    val: string
  ) => {
    if (e.key === 'Backspace') {
      quaPerFragment.reduce((prev, cur) => {
        if (prev + 1 === val.length) {
          setFieldValue(fieldName, val.slice(0, val.length - 1));
        }
        return prev + cur + 1;
      });
    }
  };

  return { formatOnChange, formatOnKeyDown };
};

export default useInputFormatter;
