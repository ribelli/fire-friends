import React, { Component } from 'react';
import './style/index.scss'
// import {Link} from "react-router-dom";
import InterestsGraphUser from "../interests-graph-user";
import {Link} from "react-router-dom";
// import {Popover} from "react-awesome-popover";

class GroupItem extends Component {

    static groupsRender(group, index) {
        return(
            <Link to={'/groups/id:' + group.id} key={index} className='group-item'>
                <div className='group-item__name'>{group.name}</div>
                <div className='group-item__value'>{group.userValue}</div>
                <div className='group-item__text'>{group.text}</div>
                <InterestsGraphUser/>
            </Link>
        )
    }

    static goToGroup(query) {
        window.location.assign('/id'+ query);
    }

    render() {

        return (
            <div className="group-card">
                <div className="group-layer">
                    {this.props.groups.map((group, index) => GroupItem.groupsRender(group, index))}
                </div>
            </div>
        );
    }
}

export default GroupItem;
