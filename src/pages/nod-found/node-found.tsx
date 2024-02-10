import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';

export const NodeFound = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const onSubmit = (): void => {
    if (inputRef.current?.value.length === 0) {
      inputRef.current.focus();
    } else {
      console.log(inputRef.current?.value);
    }
    console.log(inputValue);
  };

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('mouseenter', () => {
        console.log('mouseenter');
      });

      return () => {
        element.removeEventListener('mouseenter', () => {
          console.log('leave', 'useEffect return');
        });
      };
    }
  }, [ref]);

  return (
    <div ref={ref}>
      <div>useState</div>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
        value={inputValue}
        type="text"
      />
      <div>useRef</div>
      {/* @ts-ignore */}
      <input ref={inputRef} type="text" />
      <button onClick={onSubmit} type="submit">
        submit
      </button>
    </div>
  );
};
