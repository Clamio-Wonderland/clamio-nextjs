// components/FancySelect.tsx
"use client";

import React from "react";
import Select from "react-select";
import { Badge } from "@/components/ui/badge"; // Adjust path as needed
import { customStyles } from "@/utils/customStyles"; // Adjust path as needed

type Category = {
  value: string;
  label: string;
};

interface FancySelectProps {
  options: Category[];
  initialSelected?: Category[];
  placeholder?: string;
  onChange?: (selected: Category[]) => void;
}

export function FancySelect({
  options,
  initialSelected = [],
  placeholder = "Select...",
  onChange,
}: FancySelectProps) {
  const [selected, setSelected] = React.useState<Category[]>(initialSelected);

  const handleChange = (newValue: Category[] | null) => {
    const newSelected = newValue || [];
    setSelected(newSelected);
    if (onChange) {
      onChange(newSelected);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-2 my-3">
        <Select
          isMulti
          value={selected}
          onChange={handleChange}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder={placeholder}
          isClearable
          styles={customStyles}
        />
        <div className="flex flex-wrap gap-1 my-3">
          {selected.map((item) => (
            <Badge key={item.value} variant="default">
              {item.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
