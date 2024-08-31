import MemberList from "./MemberList";

export default function SearchAndAddMember() {
  return (
    <div>
      <div className="tw-pb-20 tw-flex tw-justify-center">
        <div className="tw-max-w-4xl tw-w-full tw-bg-white tw-opacity-85 tw-border tw-border-blue-grey-100 tw-rounded-lg tw-p-7">
          <MemberList />
        </div>
      </div>
    </div>
  );
}
