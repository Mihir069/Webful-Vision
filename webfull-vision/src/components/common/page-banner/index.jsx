import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageBanner = ({ title, breadcrumbs }) => (
  <div className="relative w-full">
    <img
      src="./img/title-bg.jpg"
      alt="banner-bg"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 px-48 py-6 bg-gradient-to-t from-slate-900 to-transparent z-10 uppercase">
      <div className="text-white text-xs sm:text-3xl font-bold font-customFont py-5">
        {title}
      </div>
      <div className="text-white sm:text-xs font-customFont">
        <ul className="flex gap-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <div className="flex gap-3" key={index}>
              <li>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </li>
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageBanner;
