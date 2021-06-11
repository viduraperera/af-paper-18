import React, { Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    name: '',
    code: '',
    pass_mark: '',
    lecture_in_charge: '',
    subjects: [],
    options: [],
    selectedSubjects:[]
}

class CreateCourse extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectSelect = this.onSubjectSelect.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:5001/subject/')
            .then(response => {
                this.setState({ subjects: response.data }, () => {
                    console.log("subjects", this.state.subjects);
                    let data = [];
                    this.state.subjects.map((item, index) =>{
                        let subject = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(subject);
                        console.log(subject);
                    });
                    this.setState({options: data})
                })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubjectSelect(e) {
        this.setState({ selectedSubjects: e ? e.map(item => item.value) : [] });
    }

    onSubmit(e) {
        e.preventDefault();
        let course = {
            name: this.state.name,
            code: this.state.code,
            pass_mark: this.state.pass_mark,
            lecture_in_charge: this.state.lecture_in_charge,
            subjects: this.state.selectedSubjects
        };
        console.log('DATA TO SEND', course)
        axios.post('http://localhost:5001/courses/create', course)
            .then(response => {
                alert('Course Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Create Course</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="courseName" className="form-label">Course Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="courseName"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="courseCode" className="form-label">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="courseCode"
                            name="code"
                            value={this.state.code}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="coursePassMark" className="form-label">Pass Mark</label>
                        <input
                            type="number"
                            className="form-control"
                            id="coursePassMark"
                            name="pass_mark"
                            value={this.state.pass_mark}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="courseLec" className="form-label">Lecture</label>
                        <input
                            type="text"
                            className="form-control"
                            id="courseLec"
                            name="lecture_in_charge"
                            value={this.state.lecture_in_charge}
                            onChange={this.onChange}
                        />
                    </div>
                    <Select
                        options={this.state.options}
                        onChange={this.onSubjectSelect}
                        className="basic-multi-select"
                        isMulti
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCourse;