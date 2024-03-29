import React, { Component } from "react";
import Project from "./Project.js";
import NKPImages from "./ProjectImages/NKPImages.js";
import ASFACImages from "./ProjectImages/ASFACImages.js";
import WalkingBucketImages from "./ProjectImages/WalkingBucketImages.js";

class Work extends Component {
  state = {
    projects: [
      {
        client: "Basketball Workout Visualizer",
        clientURL: "https://walking-bucket.herokuapp.com/",
        title: "Personal tracker for basketball shot progress",
        description:
          "Progressive web app built with React, Express and MongoDB. User can update their shot workouts and visually track their daily progress as they improve.",
        images: WalkingBucketImages,
        github: "https://github.com/alexanderchoi/walking-buckets"
      },
      {
        client: "NKP Medical",
        clientURL: "https://www.nkpmedical.com/",
        title: "Plastic surgery websites",
        description: "Brand websites built for private plastic surgery practices, powered by Wordpress. Front end web development, debugging and support.",
        images: NKPImages,
        github: null
      },
      {
        client: "A Show For A Change",
        clientURL: "https://ashowforachange.com/",
        title: "Social-conscious streaming platform",
        description: "Streaming platform built for creators to upload videos and film with socially-conscious objectives. Viewers can support creators and their media with some change. Built with React and PHP backend. Front end web development, debugging and support.",
        images: ASFACImages,
        github: null
      }
    ],
    projectView: 0
  };

  render() {
    const updateProjectView = e => {
      let direction = e.target.classList[1].slice(11);
      let currentView = this.state.projectView;

      if (direction === "left") {
        if (this.state.projectView < 1) {
          this.setState({ projectView: this.state.projects.length - 1 });
        } else {
          this.setState({ projectView: currentView - 1 });
        }
      } else {
        if (this.state.projectView > 1) {
          this.setState({ projectView: 0 });
        } else {
          this.setState({ projectView: currentView + 1 });
        }
      }
    };

    return (
      <div id="Work">
        <Project
          project={this.state.projects[this.state.projectView]}
          updateProjectView={updateProjectView}
        />
      </div>
    );
  }
}

export default Work;
