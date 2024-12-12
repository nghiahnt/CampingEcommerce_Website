import React, { useState, useRef } from "react";
import cn from "classnames";
import $ from "jquery";
import Breadcrumbs from "../../components/Breadcrumbs";
import TextInput from "../../components/TextInput";
import DropdownSelect from "../../components/DropdownSelect";
import styles from "./CareersPage.module.sass";
import Vacancies from "./Vacancies";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: "Navigation",
    url: "/",
  },
  {
    title: "Сareers",
  },
];

const locationOptions = ["Select Location", "USA", "Canada"];
const departmentOptions = ["Sales & Marketing", "Sort By 01", "Sort By 02"];

const vacancy = [
  {
    title: "Sr. Sales Manager",
    text: "Sales & Marketing  -  San Francisco, California  -  $125k+",
    button: "Apply",
  },
  {
    title: "Junior Marketing Designer",
    text: "Sales & Marketing  -  Los Angeles, California  -  $55k+",
    button: "Apply",
  },
  {
    title: "Digital Marketing Consultant",
    text: "Sales & Marketing  -  Remote (US)  -  $85k+",
    button: "Apply",
  },
  {
    title: "Marketing Manager (Sales)",
    text: "Sales & Marketing  -  New York City, New York  -  $75k+",
    button: "Apply",
  },
  {
    title: "Sr. Marketing Designer",
    text: "Sales & Marketing  -  San Francisco, California  -  $150k+",
    button: "Apply",
  },
];

function CareersPage() {
  const [visible, setVisible] = useState(false);
  const box = useRef();

  const [location, setLocation] = useState(locationOptions[0]);
  const [department, setDepartment] = useState(departmentOptions[0]);

  const handleClick = (a) => {
    $(box.current).slideToggle();
    setVisible(!visible);
  };

  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={cn("center")}>
          <div className={cn("stage")}>- Join our Team</div>
          <h2 className={cn("title title_mb-lg")}>Explore the Careers</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.filters}>
                <div className={cn("button-open", { active: visible }, styles.open)} onClick={handleClick}>
                  Filter By
                </div>
                <div className={styles.box} ref={box}>
                  <div className={styles.form}>
                    <div className={styles.title}>Filter By</div>
                    <div className={styles.fieldset}>
                      <TextInput className={styles.field} label="Job Title" name="Job" type="text" />

                      <DropdownSelect className={cn(styles.field, "wide")} label="Location" value={location} setValue={setLocation} options={locationOptions} />

                      <DropdownSelect className={cn(styles.field, "wide")} label="Department" value={department} setValue={setDepartment} options={departmentOptions} />
                    </div>
                    <div className={styles.buttons}>
                      <button className={cn("button button-green button-wide", styles.button)}>Apply Filters</button>
                      <button className={cn("button button-border button-wide", styles.button)}>Clear All</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <Vacancies items={vacancy} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareersPage;
