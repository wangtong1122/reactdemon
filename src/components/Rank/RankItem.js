import React, {lazy} from "react";
import styled from 'styled-components'
import axios from "axios";
import api from "../../api/api";

class RankItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        axios.post(api.BASE_URI + api.ranklistdetail +"?id="+ this.props.id).then(
            response => {
                console.log(response.data);
                const names = []
                if (response.data && response.data.playlist.length !== 0) {
                    response.data.playlist.tracks.slice(0,10).forEach((item) =>
                        names.push(item.name)
                    )
                }
                this.setState({
                    tracks: names
                })
            },
            error => {
                console.log(error);
            }
        )
    }

    render() {
        const list = this.state.tracks.map((item) => <li>
            <p>{item}</p>
        </li>)
        console.log(this.state.tracks)
        return <div>
            <ul>
                {list}
            </ul>
        </div>
    }
}

export default RankItem