import * as React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
        root: {
                maxWidth: 500,
        },
        media: {
                height: 200,
        },
});

export interface CourseProps {}

const Course: React.FunctionComponent<CourseProps> = () => {
        const classes = useStyles();
        return (
                <div className="flex flex-col flex-1 pt-20 bg-gradient-to-br from-red-400 to-orange-400 ">
                        <h1 className="mb-10 text-5xl font-semibold text-center text-green-400">List of Courses</h1>
                        <div className="flex justify-around">
                                <Card className={classes.root}>
                                        <CardActionArea>
                                                <CardMedia
                                                        className={classes.media}
                                                        image="/share/course1.jpg"
                                                        title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                                Name Course
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                                Lizards are a widespread group of squamate reptiles,
                                                                with over 6,000 species, ranging across all continents
                                                                except Antarctica
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                                <Button size="small" color="primary">
                                                        Register Course
                                                </Button>
                                        </CardActions>
                                </Card>
                                <Card className={classes.root}>
                                        <CardActionArea>
                                                <CardMedia
                                                        className={classes.media}
                                                        image="/share/course1.jpg"
                                                        title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                                Name Course
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                                Lizards are a widespread group of squamate reptiles,
                                                                with over 6,000 species, ranging across all continents
                                                                except Antarctica
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                                <Button size="small" color="primary">
                                                        Register Course
                                                </Button>
                                        </CardActions>
                                </Card>
                                <Card className={classes.root}>
                                        <CardActionArea>
                                                <CardMedia
                                                        className={classes.media}
                                                        image="/share/course1.jpg"
                                                        title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                                Name Course
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                                Lizards are a widespread group of squamate reptiles,
                                                                with over 6,000 species, ranging across all continents
                                                                except Antarctica
                                                        </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                                <Button size="small" color="primary">
                                                        Register Course
                                                </Button>
                                        </CardActions>
                                </Card>
                        </div>
                </div>
        );
};

export default Course;
