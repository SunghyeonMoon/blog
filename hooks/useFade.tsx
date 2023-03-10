import { useEffect } from 'react';

type UseFadeProps = {
  selector: string;
};

const UseFade = ({ selector }: UseFadeProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          target.style.opacity = entry.isIntersecting ? '1' : '0';
          target.style.borderWidth = entry.isIntersecting ? '1px' : '0px';
        });
      },
      { rootMargin: '-10%' },
    );

    const contents = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
    contents.forEach((content) => {
      content.style.opacity = '0';
      content.style.transition = 'opacity 0.25s linear';
      observer.observe(content);
    });
    return () => observer.disconnect();
  }, [selector]);
};

export default UseFade;
