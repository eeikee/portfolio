'use client';

import { Select } from "antd";
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Select defaultValue={localActive}
      style={{ width: 110 }}
      onChange={onSelectChange}
      disabled={isPending}
      options={[{ active: true, value: 'en', label: <span>English</span> }, { value: 'ja', label: <span>日本語</span> }, { value: 'pt', label: <span>Português</span> }]} />
  );
}