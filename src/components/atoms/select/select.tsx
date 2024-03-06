import FormControl from '@mui/material/InputLabel';
import InputLabel  from '@mui/material/InputLabel';
import SelectMaterialUI  from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {SelectInputProps} from '@mui/material/Select/SelectInput';

interface ISelectProps {
    title: string;
    value: string;
    options: string[];
    onChange:  SelectInputProps<string>['onChange'];
}
export const Select = (props: ISelectProps) => {
    const { title, value, options, onChange } = props;

    const id = `select-${title}`;

    return (
        <FormControl fullWidth>
            <InputLabel id={id}>{title}</InputLabel>
            <SelectMaterialUI
                labelId={id}
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={onChange}
            >
                {options.map(item =>  <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </SelectMaterialUI>
        </FormControl>
    )
}