"use client";

import React from "react";
import CreatableSelect from "react-select/creatable";
import { Badge } from "@/components/ui/badge"; // Adjust path as needed
import { customStyles } from "@/utils/customStyles"; // Adjust path as needed

type Category = {
  value: string;
  label: string;
};

interface FancyMultiSelectProps {
  options: Category[];
  initialSelected?: Category[];
  placeholder?: string;
  onChange?: (selected: Category[]) => void;
}

export function FancyMultiSelect({
  options,
  initialSelected = [],
  placeholder = "Select...",
  onChange,
}: FancyMultiSelectProps) {
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
        <CreatableSelect
          isMulti
          value={selected}
          onChange={handleChange}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder={placeholder}
          isClearable
          formatCreateLabel={(inputValue: any) => `Create "${inputValue}"`}
          styles={customStyles}
        />
        <div className="flex flex-wrap gap-1 my-3">
          {selected.map((framework) => (
            <Badge key={framework.value} variant="default">
              {framework.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
