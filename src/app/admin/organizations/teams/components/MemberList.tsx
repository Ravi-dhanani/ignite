import { memberData } from "@/data/MemberData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Checkbox, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function MemberList() {
  const [data, setDate] = useState([...memberData]);
  const [selectMember, setSelectMember] = useState(false);
  return (
    <div>
      <div className="tw-mb-4">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-black tw-mb-2"
        >
          Search and add member
        </label>
        <div className="tw-relative">
          <div className="tw-border  tw-flex tw-mb-2 sm:tw-mb-0 tw-items-center tw-border-gray-200 tw-rounded-md tw-p-2">
            <MagnifyingGlassIcon className="tw-w-5 tw-h-5 tw-text-gray-400" />
            <input
              type="text"
              className="tw-outline-none tw-px-2 tw-w-full"
              placeholder="Search"
              onClick={() => setSelectMember(!selectMember)}
            />
          </div>
          {selectMember && (
            <div className="tw-bg-white tw-absolute tw-z-10 tw-top-11 tw-w-full  tw-opacity-100    tw-box-border tw-p-3 tw-rounded-b-lg tw-shadow-xl">
              {data &&
                data.slice(1, 3).map((item: any, index: number) => (
                  <div
                    className="tw-flex tw-justify-between  tw-items-center tw-m-1 md:tw-m-5"
                    key={index}
                  >
                    <div className="tw-flex tw-items-center tw-space-x-5">
                      <img
                        src={item.memberImge}
                        className="tw-h-8 tw-w-8 tw-rounded-full tw-object-cover"
                      />
                      <div>
                        <Typography className="tw-text-sm tw-font-bold tw-text-primaryText">
                          Brandon Geidt
                        </Typography>
                      </div>
                    </div>
                    <div>
                      <Typography
                        className="tw-text-sm tw-font-medium"
                        color="gray"
                      >
                        Coach
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        className="tw-text-sm tw-font-medium"
                        color="gray"
                      >
                        Age : 22 years
                      </Typography>
                    </div>

                    <div>
                      <Typography
                        className="tw-text-sm tw-font-medium"
                        color="gray"
                      >
                        Male
                      </Typography>
                    </div>
                    <div>
                      <Checkbox
                        style={{
                          padding: 0,
                          margin: 0,
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className={`${selectMember ? " tw-opacity-95" : "tw-opacity-100 "}`}>
        {data &&
          data.map((item: any, index: number) => (
            <div
              className="tw-flex tw-justify-between  tw-items-center tw-my-5"
              key={index}
            >
              <div className="tw-flex tw-items-center tw-space-x-5">
                <img
                  src={item.memberImge}
                  className="tw-h-8 tw-w-8 tw-rounded-full tw-object-cover"
                />
                <div>
                  <Typography className="tw-text-sm tw-font-bold tw-text-primaryText">
                    Brandon Geidt
                  </Typography>
                </div>
              </div>
              <div>
                <Typography className="tw-text-sm tw-font-medium" color="gray">
                  Coach
                </Typography>
              </div>
              <div>
                <Typography className="tw-text-sm tw-font-medium" color="gray">
                  Age : 22 years
                </Typography>
              </div>

              <div>
                <Typography className="tw-text-sm tw-font-medium" color="gray">
                  Male
                </Typography>
              </div>
              <div>
                <button className="tw-underline tw-text-sm tw-font-body">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
