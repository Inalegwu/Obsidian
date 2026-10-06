import { Checkbox } from "@base-ui/react/checkbox";
import { Combobox } from "@base-ui/react/combobox";
import { Input } from "@base-ui/react/input";
import { Popover } from "@base-ui/react/popover";
import {
  AddCircle,
  CalendarMinimalistic,
  CloseCircle,
  Eye,
  EyeClosed,
  TrashBinMinimalistic,
} from "@solar-icons/react/ssr";
import { format } from "date-fns";
import { useState } from "react";
import DateWheelPicker from "./date-picker";
import { CaretDownIcon, CheckIcon } from "./icons";
import Switch from "./switch";

type SelectOption = {
  name: string;
  value: string;
};

/**
 * Structural subset of Inertia's `useForm()` return value.
 * Kept loose on purpose so `InertiaFormProps<T>` is assignable regardless of T.
 */
type InertiaFormLike = {
  data: Record<string, any>;
  setData: (key: any, value: any) => void;
  errors: Partial<Record<string, string>>;
  clearErrors: (...fields: any[]) => void;
  processing: boolean;
};

type FieldType =
  | "text"
  | "password"
  | "long"
  | "phone"
  | "select"
  | "date"
  | "number"
  | "array"
  | "boolean";

type ArrayItemField = {
  name: string;
  label: string;
  type?: Exclude<FieldType, "array">;
  placeholder?: string;
  options?: SelectOption[];
  dateFormat?: string;
  multiple?: boolean;
};

type FormInputProps = {
  form: InertiaFormLike;
  /** Dot-notation path into the form data, e.g. "email" or "items.0.name" */
  name: string;
  label: string;
  type?: FieldType;
  placeholder?: string;
  disabled?: boolean;
  options?: SelectOption[];
  dateFormat?: string;
  multiple?: boolean;
  itemFields?: ArrayItemField[];
};

type Field = {
  name: string;
  value: unknown;
  error?: string;
  onChange: (value: unknown) => void;
};

const getIn = (obj: unknown, path: string): unknown =>
  path
    .split(".")
    .reduce<any>((acc, key) => (acc == null ? acc : acc[key]), obj);

function getField(form: InertiaFormLike, name: string): Field {
  return {
    name,
    value: getIn(form.data, name),
    error: form.errors[name],
    onChange: (value) => {
      // Inertia errors persist until the next submit; clear as the user edits.
      if (form.errors[name]) form.clearErrors(name);
      form.setData(name, value);
    },
  };
}

export default function FormInput({
  form,
  name,
  label,
  type = "text",
  placeholder,
  disabled,
  options,
  dateFormat,
  multiple,
  itemFields,
}: FormInputProps) {
  if (type === "array") {
    if (!itemFields) {
      throw new Error(
        `FormInput: "itemFields" is required when type="array" (field "${name}")`,
      );
    }
    return (
      <ArrayInput
        form={form}
        name={name}
        label={label}
        itemFields={itemFields}
        disabled={disabled}
      />
    );
  }

  const field = getField(form, name);
  const isDisabled = disabled || form.processing;

  return (
    <div className="flex flex-col w-full gap-1">
      <div className="w-full flex items-center justify-between gap-1">
        <label htmlFor={name} className="formLabel">
          {label}
        </label>
        {field.error && <span className="formError">{field.error}</span>}
      </div>
      <Switch value={type}>
        {{
          password: () => (
            <PasswordInput
              field={field}
              disabled={isDisabled}
              placeholder={placeholder}
            />
          ),
          text: () => (
            <TextInput
              field={field}
              disabled={isDisabled}
              placeholder={placeholder}
            />
          ),
          phone: () => (
            <TextInput
              field={field}
              disabled={isDisabled}
              placeholder={placeholder}
            />
          ),
          long: () => (
            <LongInput
              field={field}
              disabled={isDisabled}
              placeholder={placeholder}
            />
          ),
          select: () =>
            typeof options !== "undefined" && (
              <SelectInput
                field={field}
                disabled={isDisabled}
                options={options}
                multiple={multiple}
              />
            ),
          date: () => (
            <DateInput
              field={field}
              disabled={isDisabled}
              placeholder={placeholder}
              dateFormat={dateFormat || "PPP"}
            />
          ),
          number: () => (
            <NumberInput
              field={field}
              disabled={isDisabled}
              placeholder={placeholder}
            />
          ),
          boolean: () => <BooleanInput field={field} disabled={isDisabled} />,
        }}
      </Switch>
    </div>
  );
}

type InputProps = {
  field: Field;
  disabled?: boolean;
  placeholder?: string;
};

function BooleanInput({ field, disabled }: InputProps) {
  return (
    <Checkbox.Root
      name={field.name}
      disabled={disabled}
      checked={Boolean(field.value)}
      onCheckedChange={(v) => field.onChange(v)}
      className="flex size-4 shrink-0 items-center justify-center border rounded-none p-0 border-neutral-300 bg-neutral-300 text-neutral-500 data-checked:bg-neutral-300 data-checked:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
    >
      <Checkbox.Indicator className="flex data-unchecked:hidden">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}

function DateInput({
  field,
  disabled,
  placeholder,
  dateFormat,
}: InputProps & { dateFormat: string }) {
  return (
    <Popover.Root>
      <Popover.Trigger
        id={field.name}
        disabled={disabled}
        data-empty={!field.value}
        className="w-full border border-solid border-neutral-200 text-neutral-500 rounded-sm text-sm py-2 px-2 bg-neutral-100 flex items-center justify-start gap-2"
      >
        <CalendarMinimalistic size={12} weight="Bold" />
        <span>
          {field.value
            ? format(new Date(field.value as string | Date), dateFormat)
            : (placeholder ?? "Pick a date")}
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8} align="start">
          <Popover.Popup className="relative flex h-(--popup-height,auto) w-(--popup-width,auto) max-w-125 flex-col gap-1 origin-(--transform-origin) bg-transparent outline-none shadow-[0.25rem_0.25rem_0] p-3 shadow-black/12 dark:shadow-none transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
            <DateWheelPicker
              onChange={(value) => field.onChange(value.toString())}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

function PasswordInput({ field, disabled, placeholder }: InputProps) {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="input">
      <div className="flex">
        <Input
          render={
            <input
              id={field.name}
              name={field.name}
              className="w-full outline-none"
              type={isVisible ? "text" : "password"}
              value={(field.value as string) ?? ""}
              onChange={(e) => field.onChange(e.target.value)}
              disabled={disabled}
              placeholder={placeholder}
            />
          }
        />
        <button
          className="flex items-center justify-center px-1 rounded-sm"
          type="button"
          disabled={disabled}
          onClick={() => setVisible((v) => !v)}
        >
          {isVisible ? <EyeClosed weight="Bold" /> : <Eye weight="Bold" />}
        </button>
      </div>
    </div>
  );
}

function NumberInput({ field, disabled, placeholder }: InputProps) {
  return (
    <Input
      render={
        <input
          id={field.name}
          name={field.name}
          value={(field.value as number | string | undefined) ?? ""}
          onChange={(e) =>
            field.onChange(
              e.target.value === "" ? undefined : Number(e.target.value),
            )
          }
          disabled={disabled}
          placeholder={placeholder}
          className="input"
          type="number"
        />
      }
    />
  );
}

function TextInput({ field, disabled, placeholder }: InputProps) {
  return (
    <Input
      render={
        <input
          id={field.name}
          name={field.name}
          value={(field.value as string) ?? ""}
          onChange={(e) => field.onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="input"
        />
      }
    />
  );
}

function LongInput({ field, disabled, placeholder }: InputProps) {
  return (
    <Input
      render={
        <textarea
          id={field.name}
          name={field.name}
          value={(field.value as string) ?? ""}
          onChange={(e) => field.onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="input h-72 max-h-72"
        />
      }
    />
  );
}

function SelectInput({
  field,
  disabled,
  options,
  multiple,
}: InputProps & { options: SelectOption[] ,multiple?:boolean}) {
  return (
    <Combobox.Root
      disabled={disabled}
      value={(field.value ?? (multiple ? [] : null)) as any}
      onValueChange={(v) => field.onChange(v)}
      multiple={multiple}
    >
      <Combobox.InputGroup className="relative w-full border border-solid border-neutral-100 rounded-md corner-squircle [&>input]:pr-10 has-[.combobox-clear]:[&>input]:pr-[calc(0.5rem+2rem*2)]">
        <Combobox.Input
          placeholder={`eg ${options[0]?.value ?? ""}`}
          id={field.name}
          name={field.name}
          className="h-full w-full bg-neutral-100 border border-solid border-neutral-200 rounded-sm p-2 text-sm any-pointer-coarse:text-base font-normal text-neutral-500 outline-none placeholder:text-neutral-400"
        />
        <div className="absolute right-0 bottom-0 flex h-full items-center justify-center text-neutral-500 dark:text-neutral-400">
          <Combobox.Clear
            className="combobox-clear flex h-full w-6 items-center justify-center border-0 bg-transparent p-0 text-neutral-400"
            aria-label="Clear selection"
          >
            <CloseCircle weight="Bold" />
          </Combobox.Clear>
          <Combobox.Trigger
            className="flex h-full w-6 items-center justify-center border-0 bg-transparent p-0 text-neutral-400"
            aria-label="Open popup"
          >
            <CaretDownIcon />
          </Combobox.Trigger>
        </div>
      </Combobox.InputGroup>
      <Combobox.Portal>
        <Combobox.Positioner
          className="outline-hidden select-none z-40"
          sideOffset={5}
        >
          <Combobox.Popup className="group min-w-(--anchor-width) origin-(--transform-origin) bg-clip-padding border border-neutral-200 bg-white rounded-md text-neutral-950 outline-hidden shadow transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-[side=none]:translate-y-px data-[side=none]:min-w-[calc(var(--anchor-width)+1.75rem)] data-[side=none]:data-ending-style:transition-none data-starting-style:scale-[0.98] data-starting-style:opacity-0 data-[side=none]:data-starting-style:scale-100 data-[side=none]:data-starting-style:opacity-100 data-[side=none]:data-starting-style:transition-none">
            <Combobox.Empty>
              <div className="py-4 pr-4 pl-2 text-sm leading-4 text-neutral-400">
                No results found
              </div>
            </Combobox.Empty>
            <Combobox.Arrow className="top-0 z-1 flex h-4 w-full cursor-default items-center justify-center bg-white text-center text-xs before:absolute data-[side=none]:before:-top-full before:left-0 before:h-full before:w-full before:content-['']" />
            <Combobox.List className="relative py-1 scroll-py-6 overflow-y-auto max-h-(--available-height)">
              {options.map((option) => (
                <Combobox.Item
                  value={option.value}
                  key={option.value}
                  className="menu-item"
                >
                  <Combobox.ItemIndicator className="col-start-1">
                    <CheckIcon height={10} width={10} />
                  </Combobox.ItemIndicator>
                  <span className="col-start-2 font-medium">{option.name}</span>
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

type ArrayInputProps = {
  form: InertiaFormLike;
  name: string;
  label: string;
  itemFields: ArrayItemField[];
  disabled?: boolean;
};

function ArrayInput({
  form,
  name,
  label,
  itemFields,
  disabled,
}: ArrayInputProps) {
  const items = (getIn(form.data, name) as unknown[] | undefined) ?? [];
  const error = form.errors[name];
  const isDisabled = disabled || form.processing;

  const append = () =>
    form.setData(name, [...items, buildDefaultItem(itemFields)]);

  const remove = (index: number) =>
    form.setData(
      name,
      items.filter((_, i) => i !== index),
    );

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="w-full flex items-center justify-between">
        <span className="formLabel">{label}</span>
        <button
          type="button"
          disabled={isDisabled}
          onClick={append}
          className="bg-black p-1 rounded-full text-white"
        >
          <AddCircle weight="Bold" size={14} />
        </button>
      </div>

      {items.length === 0 && (
        <p className="text-xs text-neutral-400">No items yet.</p>
      )}
      <div className="flex flex-col gap-3">
        {items.map((_, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: items have no stable id; all inputs are controlled
            key={index}
            className="flex flex-col gap-2 rounded-sm border border-solid border-neutral-200 p-2"
          >
            {itemFields.map((itemField) => (
              <FormInput
                key={itemField.name}
                form={form}
                name={`${name}.${index}.${itemField.name}`}
                label={itemField.label}
                type={itemField.type}
                placeholder={itemField.placeholder}
                options={itemField.options}
                dateFormat={itemField.dateFormat}
                multiple={itemField.multiple}
                disabled={isDisabled}
              />
            ))}
            <button
              type="button"
              disabled={isDisabled}
              onClick={() => remove(index)}
              className="flex items-center justify-center rounded-sm hover:bg-red-200"
            >
              <TrashBinMinimalistic size={12} />
            </button>
          </div>
        ))}
      </div>
      {error && <span className="formError">{error}</span>}
    </div>
  );
}

function buildDefaultItem(itemFields: ArrayItemField[]): Record<string, unknown> {
  return itemFields.reduce<Record<string, unknown>>((acc, f) => {
    if (f.type === "date") acc[f.name] = undefined;
    else if (f.type === "select") acc[f.name] = f.multiple ? [] : null;
    else if (f.type === "number") acc[f.name] = undefined;
    else if (f.type === "boolean") acc[f.name] = false;
    else acc[f.name] = "";
    return acc;
  }, {});
}
