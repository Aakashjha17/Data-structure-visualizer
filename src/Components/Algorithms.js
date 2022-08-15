import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import icon1 from './images/Sorting.png'
import icon2 from './images/pathfinding.png'
import icon4 from './images/Binary.png'

const Algorithms = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Algorithms</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={icon1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Sorting Algorithms</h5>
                                        <p class="card-text"> Sorting Algorithm is used to rearrange a given array or list elements 
                                        according to a comparison operator on the elements.This is used to decide the new order of element</p>
                                        <Link to="/sorting" >
                                        <Button buttonSize='btn--wide' buttonColor='orange'>
                                            VISUALIZE
                                        </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={icon2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Pathfinding Algorithms</h5>
                                        <p class="card-text">Pathfinding or pathing is the plotting, by a computer application, of the 
                                        shortest route between two points.It is a more practical variant on solving mazes</p>
                                        <Link to="#" >
                                        <Button buttonSize='btn--wide' buttonColor='orange'>
                                            VISUALIZE
                                        </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={icon4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Binary Tree</h5>
                                        <p class="card-text">Binary Tree is a special datastructure used for data storage purposes. A 
                                        binary tree has a special condition that each node can have a maximum of two children</p>
                                        <Link to="/binarytree" >
                                        <Button buttonSize='btn--wide' buttonColor='orange'>
                                            VISUALIZE
                                        </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Algorithms