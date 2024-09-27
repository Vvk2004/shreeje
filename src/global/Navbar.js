import { Box, Container, Grid, MenuItem, Select, Typography, Drawer, IconButton, Collapse } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '../assets/images/global/Logo.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const countries = [
    { code: 'AF', name: 'Afghanistan', flag: 'https://flagcdn.com/af.svg' },
    { code: 'AL', name: 'Albania', flag: 'https://flagcdn.com/al.svg' },
    { code: 'DZ', name: 'Algeria', flag: 'https://flagcdn.com/dz.svg' },
    { code: 'AS', name: 'American Samoa', flag: 'https://flagcdn.com/as.svg' },
    { code: 'AD', name: 'Andorra', flag: 'https://flagcdn.com/ad.svg' },
    { code: 'AO', name: 'Angola', flag: 'https://flagcdn.com/ao.svg' },
    { code: 'AI', name: 'Anguilla', flag: 'https://flagcdn.com/ai.svg' },
    { code: 'AQ', name: 'Antarctica', flag: 'https://flagcdn.com/aq.svg' },
    { code: 'AG', name: 'Antigua and Barbuda', flag: 'https://flagcdn.com/ag.svg' },
    { code: 'AR', name: 'Argentina', flag: 'https://flagcdn.com/ar.svg' },
    { code: 'AM', name: 'Armenia', flag: 'https://flagcdn.com/am.svg' },
    { code: 'AW', name: 'Aruba', flag: 'https://flagcdn.com/aw.svg' },
    { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
    { code: 'AT', name: 'Austria', flag: 'https://flagcdn.com/at.svg' },
    { code: 'AZ', name: 'Azerbaijan', flag: 'https://flagcdn.com/az.svg' },
    { code: 'BS', name: 'Bahamas', flag: 'https://flagcdn.com/bs.svg' },
    { code: 'BH', name: 'Bahrain', flag: 'https://flagcdn.com/bh.svg' },
    { code: 'BD', name: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg' },
    { code: 'BB', name: 'Barbados', flag: 'https://flagcdn.com/bb.svg' },
    { code: 'BY', name: 'Belarus', flag: 'https://flagcdn.com/by.svg' },
    { code: 'BE', name: 'Belgium', flag: 'https://flagcdn.com/be.svg' },
    { code: 'BZ', name: 'Belize', flag: 'https://flagcdn.com/bz.svg' },
    { code: 'BJ', name: 'Benin', flag: 'https://flagcdn.com/bj.svg' },
    { code: 'BM', name: 'Bermuda', flag: 'https://flagcdn.com/bm.svg' },
    { code: 'BT', name: 'Bhutan', flag: 'https://flagcdn.com/bt.svg' },
    { code: 'BO', name: 'Bolivia', flag: 'https://flagcdn.com/bo.svg' },
    { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba', flag: 'https://flagcdn.com/bq.svg' },
    { code: 'BA', name: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/ba.svg' },
    { code: 'BW', name: 'Botswana', flag: 'https://flagcdn.com/bw.svg' },
    { code: 'BV', name: 'Bouvet Island', flag: 'https://flagcdn.com/bv.svg' },
    { code: 'BR', name: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
    { code: 'IO', name: 'British Indian Ocean Territory', flag: 'https://flagcdn.com/io.svg' },
    { code: 'BN', name: 'Brunei Darussalam', flag: 'https://flagcdn.com/bn.svg' },
    { code: 'BG', name: 'Bulgaria', flag: 'https://flagcdn.com/bg.svg' },
    { code: 'BF', name: 'Burkina Faso', flag: 'https://flagcdn.com/bf.svg' },
    { code: 'BI', name: 'Burundi', flag: 'https://flagcdn.com/bi.svg' },
    { code: 'CV', name: 'Cabo Verde', flag: 'https://flagcdn.com/cv.svg' },
    { code: 'KH', name: 'Cambodia', flag: 'https://flagcdn.com/kh.svg' },
    { code: 'CM', name: 'Cameroon', flag: 'https://flagcdn.com/cm.svg' },
    { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
    { code: 'KY', name: 'Cayman Islands', flag: 'https://flagcdn.com/ky.svg' },
    { code: 'CF', name: 'Central African Republic', flag: 'https://flagcdn.com/cf.svg' },
    { code: 'TD', name: 'Chad', flag: 'https://flagcdn.com/td.svg' },
    { code: 'CL', name: 'Chile', flag: 'https://flagcdn.com/cl.svg' },
    { code: 'CN', name: 'China', flag: 'https://flagcdn.com/cn.svg' },
    { code: 'CX', name: 'Christmas Island', flag: 'https://flagcdn.com/cx.svg' },
    { code: 'CC', name: 'Cocos (Keeling) Islands', flag: 'https://flagcdn.com/cc.svg' },
    { code: 'CO', name: 'Colombia', flag: 'https://flagcdn.com/co.svg' },
    { code: 'KM', name: 'Comoros', flag: 'https://flagcdn.com/km.svg' },
    { code: 'CD', name: 'Congo, Democratic Republic of the', flag: 'https://flagcdn.com/cd.svg' },
    { code: 'CG', name: 'Congo', flag: 'https://flagcdn.com/cg.svg' },
    { code: 'CK', name: 'Cook Islands', flag: 'https://flagcdn.com/ck.svg' },
    { code: 'CR', name: 'Costa Rica', flag: 'https://flagcdn.com/cr.svg' },
    { code: 'HR', name: 'Croatia', flag: 'https://flagcdn.com/hr.svg' },
    { code: 'CU', name: 'Cuba', flag: 'https://flagcdn.com/cu.svg' },
    { code: 'CW', name: 'Curaçao', flag: 'https://flagcdn.com/cw.svg' },
    { code: 'CY', name: 'Cyprus', flag: 'https://flagcdn.com/cy.svg' },
    { code: 'CZ', name: 'Czech Republic', flag: 'https://flagcdn.com/cz.svg' },
    { code: 'DK', name: 'Denmark', flag: 'https://flagcdn.com/dk.svg' },
    { code: 'DJ', name: 'Djibouti', flag: 'https://flagcdn.com/dj.svg' },
    { code: 'DM', name: 'Dominica', flag: 'https://flagcdn.com/dm.svg' },
    { code: 'DO', name: 'Dominican Republic', flag: 'https://flagcdn.com/do.svg' },
    { code: 'EC', name: 'Ecuador', flag: 'https://flagcdn.com/ec.svg' },
    { code: 'EG', name: 'Egypt', flag: 'https://flagcdn.com/eg.svg' },
    { code: 'SV', name: 'El Salvador', flag: 'https://flagcdn.com/sv.svg' },
    { code: 'GQ', name: 'Equatorial Guinea', flag: 'https://flagcdn.com/gq.svg' },
    { code: 'ER', name: 'Eritrea', flag: 'https://flagcdn.com/er.svg' },
    { code: 'EE', name: 'Estonia', flag: 'https://flagcdn.com/ee.svg' },
    { code: 'SZ', name: 'Eswatini', flag: 'https://flagcdn.com/sz.svg' },
    { code: 'ET', name: 'Ethiopia', flag: 'https://flagcdn.com/et.svg' },
    { code: 'FK', name: 'Falkland Islands', flag: 'https://flagcdn.com/fk.svg' },
    { code: 'FO', name: 'Faroe Islands', flag: 'https://flagcdn.com/fo.svg' },
    { code: 'FJ', name: 'Fiji', flag: 'https://flagcdn.com/fj.svg' },
    { code: 'FI', name: 'Finland', flag: 'https://flagcdn.com/fi.svg' },
    { code: 'FR', name: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { code: 'GF', name: 'French Guiana', flag: 'https://flagcdn.com/gf.svg' },
    { code: 'PF', name: 'French Polynesia', flag: 'https://flagcdn.com/pf.svg' },
    { code: 'GA', name: 'Gabon', flag: 'https://flagcdn.com/ga.svg' },
    { code: 'GM', name: 'Gambia', flag: 'https://flagcdn.com/gm.svg' },
    { code: 'GE', name: 'Georgia', flag: 'https://flagcdn.com/ge.svg' },
    { code: 'DE', name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { code: 'GH', name: 'Ghana', flag: 'https://flagcdn.com/gh.svg' },
    { code: 'GI', name: 'Gibraltar', flag: 'https://flagcdn.com/gi.svg' },
    { code: 'GR', name: 'Greece', flag: 'https://flagcdn.com/gr.svg' },
    { code: 'GL', name: 'Greenland', flag: 'https://flagcdn.com/gl.svg' },
    { code: 'GD', name: 'Grenada', flag: 'https://flagcdn.com/gd.svg' },
    { code: 'GP', name: 'Guadeloupe', flag: 'https://flagcdn.com/gp.svg' },
    { code: 'GU', name: 'Guam', flag: 'https://flagcdn.com/gu.svg' },
    { code: 'GT', name: 'Guatemala', flag: 'https://flagcdn.com/gt.svg' },
    { code: 'GG', name: 'Guernsey', flag: 'https://flagcdn.com/gg.svg' },
    { code: 'GN', name: 'Guinea', flag: 'https://flagcdn.com/gn.svg' },
    { code: 'GW', name: 'Guinea-Bissau', flag: 'https://flagcdn.com/gw.svg' },
    { code: 'GY', name: 'Guyana', flag: 'https://flagcdn.com/gy.svg' },
    { code: 'HT', name: 'Haiti', flag: 'https://flagcdn.com/ht.svg' },
    { code: 'HM', name: 'Heard Island and McDonald Islands', flag: 'https://flagcdn.com/hm.svg' },
    { code: 'VA', name: 'Holy See', flag: 'https://flagcdn.com/va.svg' },
    { code: 'HN', name: 'Honduras', flag: 'https://flagcdn.com/hn.svg' },
    { code: 'HK', name: 'Hong Kong', flag: 'https://flagcdn.com/hk.svg' },
    { code: 'HU', name: 'Hungary', flag: 'https://flagcdn.com/hu.svg' },
    { code: 'IS', name: 'Iceland', flag: 'https://flagcdn.com/is.svg' },
    { code: 'IN', name: 'India', flag: 'https://flagcdn.com/in.svg' },
    { code: 'ID', name: 'Indonesia', flag: 'https://flagcdn.com/id.svg' },
    { code: 'IR', name: 'Iran', flag: 'https://flagcdn.com/ir.svg' },
    { code: 'IQ', name: 'Iraq', flag: 'https://flagcdn.com/iq.svg' },
    { code: 'IE', name: 'Ireland', flag: 'https://flagcdn.com/ie.svg' },
    { code: 'IM', name: 'Isle of Man', flag: 'https://flagcdn.com/im.svg' },
    { code: 'IL', name: 'Israel', flag: 'https://flagcdn.com/il.svg' },
    { code: 'IT', name: 'Italy', flag: 'https://flagcdn.com/it.svg' },
    { code: 'JM', name: 'Jamaica', flag: 'https://flagcdn.com/jm.svg' },
    { code: 'JP', name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
    { code: 'JE', name: 'Jersey', flag: 'https://flagcdn.com/je.svg' },
    { code: 'JO', name: 'Jordan', flag: 'https://flagcdn.com/jo.svg' },
    { code: 'KZ', name: 'Kazakhstan', flag: 'https://flagcdn.com/kz.svg' },
    { code: 'KE', name: 'Kenya', flag: 'https://flagcdn.com/ke.svg' },
    { code: 'KI', name: 'Kiribati', flag: 'https://flagcdn.com/ki.svg' },
    { code: 'KP', name: 'Korea, Democratic People\'s Republic of', flag: 'https://flagcdn.com/kp.svg' },
    { code: 'KR', name: 'Korea, Republic of', flag: 'https://flagcdn.com/kr.svg' },
    { code: 'KW', name: 'Kuwait', flag: 'https://flagcdn.com/kw.svg' },
    { code: 'KG', name: 'Kyrgyzstan', flag: 'https://flagcdn.com/kg.svg' },
    { code: 'LA', name: 'Lao People\'s Democratic Republic', flag: 'https://flagcdn.com/la.svg' },
    { code: 'LV', name: 'Latvia', flag: 'https://flagcdn.com/lv.svg' },
    { code: 'LB', name: 'Lebanon', flag: 'https://flagcdn.com/lb.svg' },
    { code: 'LS', name: 'Lesotho', flag: 'https://flagcdn.com/ls.svg' },
    { code: 'LR', name: 'Liberia', flag: 'https://flagcdn.com/lr.svg' },
    { code: 'LY', name: 'Libya', flag: 'https://flagcdn.com/ly.svg' },
    { code: 'LI', name: 'Liechtenstein', flag: 'https://flagcdn.com/li.svg' },
    { code: 'LT', name: 'Lithuania', flag: 'https://flagcdn.com/lt.svg' },
    { code: 'LU', name: 'Luxembourg', flag: 'https://flagcdn.com/lu.svg' },
    { code: 'MO', name: 'Macao', flag: 'https://flagcdn.com/mo.svg' },
    { code: 'MG', name: 'Madagascar', flag: 'https://flagcdn.com/mg.svg' },
    { code: 'MW', name: 'Malawi', flag: 'https://flagcdn.com/mw.svg' },
    { code: 'MY', name: 'Malaysia', flag: 'https://flagcdn.com/my.svg' },
    { code: 'MV', name: 'Maldives', flag: 'https://flagcdn.com/mv.svg' },
    { code: 'ML', name: 'Mali', flag: 'https://flagcdn.com/ml.svg' },
    { code: 'MT', name: 'Malta', flag: 'https://flagcdn.com/mt.svg' },
    { code: 'MH', name: 'Marshall Islands', flag: 'https://flagcdn.com/mh.svg' },
    { code: 'MQ', name: 'Martinique', flag: 'https://flagcdn.com/mq.svg' },
    { code: 'MR', name: 'Mauritania', flag: 'https://flagcdn.com/mr.svg' },
    { code: 'MU', name: 'Mauritius', flag: 'https://flagcdn.com/mu.svg' },
    { code: 'YT', name: 'Mayotte', flag: 'https://flagcdn.com/yt.svg' },
    { code: 'MX', name: 'Mexico', flag: 'https://flagcdn.com/mx.svg' },
    { code: 'FM', name: 'Micronesia', flag: 'https://flagcdn.com/fm.svg' },
    { code: 'MD', name: 'Moldova', flag: 'https://flagcdn.com/md.svg' },
    { code: 'MC', name: 'Monaco', flag: 'https://flagcdn.com/mc.svg' },
    { code: 'MN', name: 'Mongolia', flag: 'https://flagcdn.com/mn.svg' },
    { code: 'ME', name: 'Montenegro', flag: 'https://flagcdn.com/me.svg' },
    { code: 'MS', name: 'Montserrat', flag: 'https://flagcdn.com/ms.svg' },
    { code: 'MA', name: 'Morocco', flag: 'https://flagcdn.com/ma.svg' },
    { code: 'MZ', name: 'Mozambique', flag: 'https://flagcdn.com/mz.svg' },
    { code: 'MM', name: 'Myanmar', flag: 'https://flagcdn.com/mm.svg' },
    { code: 'NA', name: 'Namibia', flag: 'https://flagcdn.com/na.svg' },
    { code: 'NR', name: 'Nauru', flag: 'https://flagcdn.com/nr.svg' },
    { code: 'NP', name: 'Nepal', flag: 'https://flagcdn.com/np.svg' },
    { code: 'NL', name: 'Netherlands', flag: 'https://flagcdn.com/nl.svg' },
    { code: 'NC', name: 'New Caledonia', flag: 'https://flagcdn.com/nc.svg' },
    { code: 'NZ', name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg' },
    { code: 'NI', name: 'Nicaragua', flag: 'https://flagcdn.com/ni.svg' },
    { code: 'NE', name: 'Niger', flag: 'https://flagcdn.com/ne.svg' },
    { code: 'NG', name: 'Nigeria', flag: 'https://flagcdn.com/ng.svg' },
    { code: 'NU', name: 'Niue', flag: 'https://flagcdn.com/nu.svg' },
    { code: 'NF', name: 'Norfolk Island', flag: 'https://flagcdn.com/nf.svg' },
    { code: 'MP', name: 'Northern Mariana Islands', flag: 'https://flagcdn.com/mp.svg' },
    { code: 'NO', name: 'Norway', flag: 'https://flagcdn.com/no.svg' },
    { code: 'OM', name: 'Oman', flag: 'https://flagcdn.com/om.svg' },
    { code: 'PK', name: 'Pakistan', flag: 'https://flagcdn.com/pk.svg' },
    { code: 'PW', name: 'Palau', flag: 'https://flagcdn.com/pw.svg' },
    { code: 'PS', name: 'Palestine, State of', flag: 'https://flagcdn.com/ps.svg' },
    { code: 'PA', name: 'Panama', flag: 'https://flagcdn.com/pa.svg' },
    { code: 'PG', name: 'Papua New Guinea', flag: 'https://flagcdn.com/pg.svg' },
    { code: 'PY', name: 'Paraguay', flag: 'https://flagcdn.com/py.svg' },
    { code: 'PE', name: 'Peru', flag: 'https://flagcdn.com/pe.svg' },
    { code: 'PH', name: 'Philippines', flag: 'https://flagcdn.com/ph.svg' },
    { code: 'PN', name: 'Pitcairn', flag: 'https://flagcdn.com/pn.svg' },
    { code: 'PL', name: 'Poland', flag: 'https://flagcdn.com/pl.svg' },
    { code: 'PT', name: 'Portugal', flag: 'https://flagcdn.com/pt.svg' },
    { code: 'PR', name: 'Puerto Rico', flag: 'https://flagcdn.com/pr.svg' },
    { code: 'QA', name: 'Qatar', flag: 'https://flagcdn.com/qa.svg' },
    { code: 'RE', name: 'Réunion', flag: 'https://flagcdn.com/re.svg' },
    { code: 'RO', name: 'Romania', flag: 'https://flagcdn.com/ro.svg' },
    { code: 'RU', name: 'Russian Federation', flag: 'https://flagcdn.com/ru.svg' },
    { code: 'RW', name: 'Rwanda', flag: 'https://flagcdn.com/rw.svg' },
    { code: 'BL', name: 'Saint Barthélemy', flag: 'https://flagcdn.com/bl.svg' },
    { code: 'SH', name: 'Saint Helena', flag: 'https://flagcdn.com/sh.svg' },
    { code: 'KN', name: 'Saint Kitts and Nevis', flag: 'https://flagcdn.com/kn.svg' },
    { code: 'LC', name: 'Saint Lucia', flag: 'https://flagcdn.com/lc.svg' },
    { code: 'MF', name: 'Saint Martin (French part)', flag: 'https://flagcdn.com/mf.svg' },
    { code: 'PM', name: 'Saint Pierre and Miquelon', flag: 'https://flagcdn.com/pm.svg' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines', flag: 'https://flagcdn.com/vc.svg' },
    { code: 'WS', name: 'Samoa', flag: 'https://flagcdn.com/ws.svg' },
    { code: 'SM', name: 'San Marino', flag: 'https://flagcdn.com/sm.svg' },
    { code: 'ST', name: 'Sao Tome and Principe', flag: 'https://flagcdn.com/st.svg' },
    { code: 'SA', name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
    { code: 'SN', name: 'Senegal', flag: 'https://flagcdn.com/sn.svg' },
    { code: 'RS', name: 'Serbia', flag: 'https://flagcdn.com/rs.svg' },
    { code: 'SC', name: 'Seychelles', flag: 'https://flagcdn.com/sc.svg' },
    { code: 'SL', name: 'Sierra Leone', flag: 'https://flagcdn.com/sl.svg' },
    { code: 'SG', name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
    { code: 'SX', name: 'Sint Maarten (Dutch part)', flag: 'https://flagcdn.com/sx.svg' },
    { code: 'SK', name: 'Slovakia', flag: 'https://flagcdn.com/sk.svg' },
    { code: 'SI', name: 'Slovenia', flag: 'https://flagcdn.com/si.svg' },
    { code: 'SB', name: 'Solomon Islands', flag: 'https://flagcdn.com/sb.svg' },
    { code: 'SO', name: 'Somalia', flag: 'https://flagcdn.com/so.svg' },
    { code: 'ZA', name: 'South Africa', flag: 'https://flagcdn.com/za.svg' },
    { code: 'GS', name: 'South Georgia and the South Sandwich Islands', flag: 'https://flagcdn.com/gs.svg' },
    { code: 'SS', name: 'South Sudan', flag: 'https://flagcdn.com/ss.svg' },
    { code: 'ES', name: 'Spain', flag: 'https://flagcdn.com/es.svg' },
    { code: 'LK', name: 'Sri Lanka', flag: 'https://flagcdn.com/lk.svg' },
    { code: 'SD', name: 'Sudan', flag: 'https://flagcdn.com/sd.svg' },
    { code: 'SR', name: 'Suriname', flag: 'https://flagcdn.com/sr.svg' },
    { code: 'SJ', name: 'Svalbard and Jan Mayen', flag: 'https://flagcdn.com/sj.svg' },
    { code: 'SZ', name: 'Sweden', flag: 'https://flagcdn.com/sz.svg' },
    { code: 'CH', name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg' },
    { code: 'SY', name: 'Syrian Arab Republic', flag: 'https://flagcdn.com/sy.svg' },
    { code: 'TW', name: 'Taiwan', flag: 'https://flagcdn.com/tw.svg' },
    { code: 'TJ', name: 'Tajikistan', flag: 'https://flagcdn.com/tj.svg' },
    { code: 'TZ', name: 'Tanzania, United Republic of', flag: 'https://flagcdn.com/tz.svg' },
    { code: 'TH', name: 'Thailand', flag: 'https://flagcdn.com/th.svg' },
    { code: 'TL', name: 'Timor-Leste', flag: 'https://flagcdn.com/tl.svg' },
    { code: 'TG', name: 'Togo', flag: 'https://flagcdn.com/tg.svg' },
    { code: 'TK', name: 'Tokelau', flag: 'https://flagcdn.com/tk.svg' },
    { code: 'TO', name: 'Tonga', flag: 'https://flagcdn.com/to.svg' },
    { code: 'TT', name: 'Trinidad and Tobago', flag: 'https://flagcdn.com/tt.svg' },
    { code: 'TN', name: 'Tunisia', flag: 'https://flagcdn.com/tn.svg' },
    { code: 'TR', name: 'Turkey', flag: 'https://flagcdn.com/tr.svg' },
    { code: 'TM', name: 'Turkmenistan', flag: 'https://flagcdn.com/tm.svg' },
    { code: 'TC', name: 'Turks and Caicos Islands', flag: 'https://flagcdn.com/tc.svg' },
    { code: 'TV', name: 'Tuvalu', flag: 'https://flagcdn.com/tv.svg' },
    { code: 'UG', name: 'Uganda', flag: 'https://flagcdn.com/ug.svg' },
    { code: 'UA', name: 'Ukraine', flag: 'https://flagcdn.com/ua.svg' },
    { code: 'AE', name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },
    { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'US', name: 'United States', flag: 'https://flagcdn.com/us.svg' },
    { code: 'UM', name: 'United States Minor Outlying Islands', flag: 'https://flagcdn.com/um.svg' },
    { code: 'UY', name: 'Uruguay', flag: 'https://flagcdn.com/uy.svg' },
    { code: 'UZ', name: 'Uzbekistan', flag: 'https://flagcdn.com/uz.svg' },
    { code: 'VU', name: 'Vanuatu', flag: 'https://flagcdn.com/vu.svg' },
    { code: 'VE', name: 'Venezuela', flag: 'https://flagcdn.com/ve.svg' },
    { code: 'VN', name: 'Viet Nam', flag: 'https://flagcdn.com/vn.svg' },
    { code: 'WF', name: 'Wallis and Futuna', flag: 'https://flagcdn.com/wf.svg' },
    { code: 'EH', name: 'Western Sahara', flag: 'https://flagcdn.com/eh.svg' },
    { code: 'YE', name: 'Yemen', flag: 'https://flagcdn.com/ye.svg' },
    { code: 'ZM', name: 'Zambia', flag: 'https://flagcdn.com/zm.svg' },
    { code: 'ZW', name: 'Zimbabwe', flag: 'https://flagcdn.com/zw.svg' },
];

const Navbar = () => {
    const [selectedValue, setSelectedValue] = useState('IN');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [sidebarSubmenuOpen, setSidebarSubmenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSidebarSubmenu = () => {
        setSidebarSubmenuOpen(!sidebarSubmenuOpen);
    };

    const closeSubmenuAndNavigate = (path) => {
        setSubmenuOpen(false);
        navigate(path);
    };

    const closeSidebarAndNavigate = (path) => {
        setSidebarSubmenuOpen(false);
        setSidebarOpen(false);
        navigate(path);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ backgroundColor: '#294462' }}>
                <Container>
                    <Box sx={{ p: 1.5, color: '#fff' }}>
                        <Grid container alignItems="center" sx={{ display: "flex", justifyContent: { sm: 'space-between', xs: 'center' } }}>
                            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <EmailIcon />
                                    <Typography>export@lunexinternational.com</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{ display: { sm: 'flex', xs: 'none' }, justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}>
                                <Grid item>
                                    <Box sx={{ display: 'flex' }}>
                                        <TwitterIcon sx={{ mr: 1, backgroundColor: '#fff', color: '#294462', borderRadius: '5px', fontSize: '20px', p: 0.5 }} />
                                        <InstagramIcon sx={{ mr: 1, backgroundColor: '#fff', color: '#294462', borderRadius: '5px', fontSize: '20px', p: 0.5 }} />
                                        <LinkedInIcon sx={{ mr: 1, backgroundColor: '#fff', color: '#294462', borderRadius: '5px', fontSize: '20px', p: 0.5 }} />
                                        <FacebookIcon sx={{ mr: 1, backgroundColor: '#fff', color: '#294462', borderRadius: '5px', fontSize: '20px', p: 0.5 }} />
                                    </Box>
                                </Grid>
                                <Box>
                                    <Select
                                        labelId="country-label"
                                        id="country-select"
                                        value={selectedValue}
                                        onChange={handleChange}
                                        sx={{
                                            color: '#fff',
                                            '.MuiOutlinedInput-notchedOutline': {
                                                border: '2px solid #fff',
                                                borderRadius: '10px'
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: '2px solid #fff',
                                                borderRadius: '10px'
                                            },
                                            '.MuiSvgIcon-root': {
                                                color: '#fff',
                                            },
                                            '.MuiSelect-select': {
                                                p: 1,
                                            }
                                        }}
                                    >
                                        {countries.map((country) => (
                                            <MenuItem key={country.code} value={country.code}>
                                                <Typography
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        maxWidth: '150px',
                                                    }}
                                                >
                                                    <Typography component={'img'}
                                                        src={country.flag}
                                                        alt={country.name}
                                                        sx={{ width: 25, height: 25, mr: 1 }}
                                                    />
                                                    {country.name}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: '#fff' }}>
                <Container>
                    <Box>
                        <Box sx={{ display: { sm: 'flex', xs: 'none' }, justifyContent: 'center' }}>
                            <MenuItem onClick={() => navigate('/')} sx={getItemStyles()}>
                                <Typography>Home</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/about')} sx={getItemStyles()}>
                                <Typography>About</Typography>
                            </MenuItem>
                            <MenuItem
                                onMouseEnter={() => setSubmenuOpen(true)}
                                onMouseLeave={() => setSubmenuOpen(false)}
                                sx={getItemStyles()}
                            >
                                <Typography>Our Products</Typography>
                                {submenuOpen && (
                                    <Box sx={{ position: 'absolute', p: 2, top: '100%', left: '-30%', zIndex: 111, backgroundColor: '#fff', boxShadow: 2 }}>
                                        <MenuItem onClick={() => closeSubmenuAndNavigate('/ourProducts')} sx={getSubmenuItemStyles()}>
                                            <ArrowRightIcon />
                                            Our Products
                                        </MenuItem>
                                        <MenuItem onClick={() => closeSubmenuAndNavigate('/ourPrdFruits')} sx={getSubmenuItemStyles()}>
                                            <ArrowRightIcon />
                                            Our Products Fruits
                                        </MenuItem>
                                        <MenuItem onClick={() => closeSubmenuAndNavigate('/ourPrdGrains')} sx={getSubmenuItemStyles()}>
                                            <ArrowRightIcon />
                                            Our Products Grains
                                        </MenuItem>
                                        <MenuItem onClick={() => closeSubmenuAndNavigate('/ourPrdSpices')} sx={getSubmenuItemStyles()}>
                                            <ArrowRightIcon />
                                            Our Products Spices
                                        </MenuItem>
                                    </Box>
                                )}
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/contact')} sx={getItemStyles()}>
                                <Typography>Contact Us</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: { sm: 'none', xs: 'flex' }, justifyContent: 'end', alignItems: 'center' }}>
                            <IconButton onClick={toggleSidebar}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar}>
                <Box sx={{
                    width: 250,
                    p: 2,
                    backgroundColor: '#294462',
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '2px 0 5px rgba(0,0,0,0.5)'
                }} role="presentation">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography component={'img'} src={Logo} width={'30%'} />
                        <IconButton onClick={toggleSidebar} sx={{ color: '#fff' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Sidebar Navigation Items */}
                    <MenuItem onClick={() => { toggleSidebar(); navigate('/'); }} sx={getSidebarItemStyles()}>
                        <HomeIcon />
                        <Typography>Home</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => { toggleSidebar(); navigate('/about'); }} sx={getSidebarItemStyles()}>
                        <InfoIcon />
                        <Typography>About Us</Typography>
                    </MenuItem>

                    <MenuItem onClick={toggleSidebarSubmenu} sx={getSidebarItemStyles()}>
                        <StorefrontIcon />
                        <Typography>Our Products</Typography>
                        <ExpandMoreIcon />
                    </MenuItem>
                    <Collapse in={sidebarSubmenuOpen} timeout="auto" unmountOnExit>
                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourProducts')} sx={getSidebarSubmenuItemStyles()}>
                            <ArrowRightIcon />
                            Our Products
                        </MenuItem>
                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourPrdFruits')} sx={getSidebarSubmenuItemStyles()}>
                            <ArrowRightIcon />
                            Our Products Fruits
                        </MenuItem>
                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourPrdGrains')} sx={getSidebarSubmenuItemStyles()}>
                            <ArrowRightIcon />
                            Our Products Grains
                        </MenuItem>
                        <MenuItem onClick={() => closeSidebarAndNavigate('/ourPrdSpices')} sx={getSidebarSubmenuItemStyles()}>
                            <ArrowRightIcon />
                            Our Products Spices
                        </MenuItem>
                    </Collapse>

                    <MenuItem onClick={() => { toggleSidebar(); navigate('/contact'); }} sx={getSidebarItemStyles()}>
                        <ContactMailIcon />
                        <Typography>Contact Us</Typography>
                    </MenuItem>
                </Box>
            </Drawer>
        </Box>
    );
};

const getItemStyles = () => ({
    p: 2,
    color: '#A0A0A0',
    '&:hover': { backgroundColor: 'unset', color: '#19AED7', transition: '0.5s' },
});

const getSubmenuItemStyles = () => ({
    p: 2,
    color: '#A0A0A0',
    '&:hover': { backgroundColor: 'unset', color: '#19AED7', transition: '0.5s' },
});
const getSidebarSubmenuItemStyles = () => ({
    p: 2,
    color: '#fff',
    fontWeight: 600,
    '&:hover': { backgroundColor: '#19AED7', transition: '0.5s' },
});

const getSidebarItemStyles = () => ({
    px: 2,
    py: 1,
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 1,
    '&:hover': { backgroundColor: '#19AED7' },
});

export default Navbar;
