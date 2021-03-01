import React from "react";
import workoutPlanner from "../../assets/workout-planner.png";
import techBlog from "../../assets/technews.png";
import makeDrink from "../../assets/drink.png";
import noteTaker from "../../assets/notes.png";
import budgetMaker from "../../assets/budget.png";
import runBuddy from "../../assets/run.png";

function Portfolio() {
  return (
    <div className="portfolio-cards">
      <div className="row row-cols-2 row-cols-md-3 g-4">
        <div className="col-4">
          <div className="card">
            <img
              src={workoutPlanner}
              class="card-img-top"
              alt="workout planner"
            />
            <div className="card-body">
              <h5 className="card-title">workout planner</h5>
              <p className="card-text">
                Interactive website that helps you schedule workout plans and
                save your favorite workouts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src={techBlog} class="card-img-top" alt="techblog" />
            <div className="card-body">
              <h5 className="card-title">tech blog</h5>
              <p className="card-text">
                CMS-style blog for writes to publish articles and stories about
                the tech industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src={makeDrink} class="card-img-top" alt="drink" />
            <div className="card-body">
              <h5 className="card-title">make me a drink!</h5>
              <p className="card-text">
                App that allows users to search drink recipes by liquor and save
                the favorite drinks they try.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src={noteTaker} class="card-img-top" alt="notes" />
            <div className="card-body">
              <h5 className="card-title">note taker</h5>
              <p className="card-text">
                Web app that allows you to take notes, save notes, and edit them
                at a later date.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src={budgetMaker} class="card-img-top" alt="budget" />
            <div className="card-body">
              <h5 className="card-title">budget maker</h5>
              <p className="card-text">
                An app that gives users an easy eay to track their money on and
                offline.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <img src={runBuddy} class="card-img-top" alt="run" />
            <div className="card-body">
              <h5 className="card-title">run buddy</h5>
              <p className="card-text">
                A website for a fitness center that offers fitness classes and
                personal training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
