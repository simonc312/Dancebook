var BrandLogo = React.createClass({
    render: function () {
    		var imgElement;
    		if (this.props.src){
    			imgElement = <img src={this.props.src} className={this.props.classes} alt={this.props.text} />;
    		} else {
    			imgElement = <span>"Error: no SRC specified"</span>;
    		}
        return (
        		<a className="brand-logo" href={this.props.linkPath}>
	        		{imgElement}
	        		Dancebook
	        	</a>
        );
    }
});
window.BrandLogo = BrandLogo;
module.exports = BrandLogo;