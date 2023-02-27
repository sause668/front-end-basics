import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export default function CellList({cell, rowId}) {
    return (
        <List sx={{mt: 0, pt: 0}} >
            {cell.list.map((item,index) => (
                <ListItem sx={{py: 0}} key={`${rowId}${index}`} >
                    <ListItemIcon>
                        <CircleIcon fontSize="small" color="primary"/>
                    </ListItemIcon>
                    <ListItemText 
                    primary={item}
                    primaryTypographyProps={{
                        variant: "body1",
                        lineHeight: 1.8,
                        align: 'left'
                    }}   />
                </ListItem>
            ))}
        </List>
    );
} 