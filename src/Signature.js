import React, { Component } from 'react';
import Select from './Select.js';

class  Signature extends Component {
        render() {
            return(
                <div className={this.props.className} style={{"float": "left"}}>
                <table width="600" id="sig" cellSpacing="0" cellPadding="0" style={{"borderSpacing":"0"}}>
			<tbody>		
			<tr>
				{/* Right Side Info */}
				<td className="right-top-td">
					<table id="sig2" cellSpacing="0" cellPadding="0" style={{"borderSpacing":"0"}} className="right-table">
					<tbody>	
						{/* Name and Credetials */}
						<tr>
							<td className="inner-td font">
								<b><span className="name-span">{this.props.name}</span></b>
							</td>
						</tr>
						{/* Title/Position */}
						<tr id="title">
							<td className="inner-td font">
								<span className="position-span">{this.props.title}</span>
							</td>
						</tr>
				
						{/* Phone Number */}
						<tr className="color-tr" id="phone">
							<td className="inner-td">
								<span className="phone-letter">Tel.:&nbsp;</span><a href={`tel:${this.props.telephone.value}`} target="_blank" className="no-dec"><span className="phone-number">{this.props.telephone.value}</span></a>
							</td>
						</tr>
						{/* Cell Phone */}
						<tr className="color-tr" id="cellphone">
							<td className="inner-td">
								<span className="phone-letter">Tel. kom.:&nbsp;</span><a href={`tel:${this.props.mobile.value}`} target="_blank" className="no-dec"><span className="phone-number">{this.props.mobile.value}</span></a>
							</td>
						</tr>
						{/* Address  */}
						<tr>
							<td className="inner-td">
								<span className="company-span">Segregatory24 Sp. z o.o. </span> <br/> <span className="company-span">ul. M. Płażyńskiego 6 <span className="brand-color">|</span> 83-020 Cedry Wielkie</span>
							</td>
						</tr>

						<tr>
							<td className="inner-td">
								<span className="company-span">tel. +48 58 683 60 50</span>
							</td>
						</tr>
					</tbody>	
					</table>
				</td>
			</tr>
			</tbody>
		</table>
<table width="600" id="sig4" cellSpacing="0" cellPadding="0" style={{"borderSpacing":"0"}}>
	<tbody>	
		{/* Company Name */}
		<tr className="color-tr">
				<td width="600" style={{"textAlign":"left"}}>
								<span className="web-span">www.segregatory24.pl</span>
								<span className="spacer">&nbsp;</span>
								<span className="web-span">www.opakowaniareklamowe.pl</span>
								<span className="spacer">&nbsp;</span>
										
				</td>
		</tr>
		
				<tr width="600" height="1">
					<td height="1" style={{"fontSize": "2px", "lineHeight": "2px", "backgroundColor=":"#f26522"}}>&nbsp;</td>	
				</tr>
	</tbody>		
</table>

		<table width="600" id="sig3" cellSpacing="0" cellPadding="0" style={{"borderSpacing":"0"}}>
			<tbody>	
			{/* Company Name */}
			<tr className="color-tr">
				<td className="inner-td">
					<a href="http://segregatory24.pl"><span className="company-span"><img src="http://cdn.segregatory24.pl/stopka.png" /></span></a>
				</td>
				
			</tr>
			</tbody>	
		</table>
		<table>
		<tbody>	
				<tr width="600" height="1">
						<td style={{"background":"none", "border":"solid 2px #f47920", "borderWidth":"2px 0 0 0",
                         "height":"2px", "width":"600px", "margin":"0px 0px 0px 0px"}}><div></div></td>
				</tr>
		</tbody>	
		</table>
		<table width="600" style={{"tableLayout":"fixed"}}>
			<tbody>	
				<tr width="600">
						<td style={{"wordWrap": "break-word", "background":"none", "border":"none", "margin":"0px 0px 0px 0px",
                        "padding":"0"}}>
								<span style={{"fontSize":"12px", "color": "#A4A4A4", "textAlign":"justify"}}>Segregatory24 Sp. z o.o. ul. M.Płażyńskiego 6, 83-020 Cedry Wielkie<br/>
								Spółka zarejestrowana w rejestrze przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd
								Rejonowy Gdańsk – Północ w Gdańsku VII Wydział Gospodarczy Krajowego Rejestru Sądowego.
								KRS: 0000808911 NIP: 604-02-15-218 REGON: 384632751 Kapitał zakładowy: 50.000 PLN</span>
						</td>
				</tr>
			</tbody>	
		</table>
                </div>
            );
        }
    }

    export default Signature;