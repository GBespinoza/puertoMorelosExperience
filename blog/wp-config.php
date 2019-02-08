<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'geekbuck_ptomorelos');

/** MySQL database username */
define('DB_USER', 'geekbuck_ptomore');

/** MySQL database password */
define('DB_PASSWORD', 'n0rris');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.B$52Q.CoEUVy6m4`]xFKcvl5o2>p7J&NB(!,tj*c_w[~ix;o6Bz4xP=8i_i$#fz');
define('SECURE_AUTH_KEY',  '8g#l9j{7Rt`_5K6a-meOY7 3:W&!(xoeI(af%9<P_C`*mWejk9w;o g]wXl+ZZpK');
define('LOGGED_IN_KEY',    '/JZ=_DM>O!Xm)T>[Utzz-?=MMTuD3J}8ZK<{C|<[i6;yFQjO*VUd+/gKji^!gvn5');
define('NONCE_KEY',        'lZt$FN]E|n}%g`wh3q}{/#([!i6|4X+%itPj/YylZ9g ;zo~f&^Qk.;?v-O)<{#T');
define('AUTH_SALT',        '@B#5G4{fPvtz~:t}m>a3kJ#fCe/3rtJKwl!Ps5u{V#;@Y06AbG*W}>0Txu]K[-[d');
define('SECURE_AUTH_SALT', 'k7$R@<wT?+q9^v%n$5.oh<6wKr~W9m#o7erIeqyt^8ARrX1lhZxo^Rd:~8W$OdIw');
define('LOGGED_IN_SALT',   '1[U@A{t`V3}P)Rqt64q%s^iK)E `MHt;:01IG_O!G^U/xLS;pK,VCvV.?19{BkA`');
define('NONCE_SALT',       'g&0Sz-lDlX*YKcO2M:JO7=zp--8aeBoL[jVm58;g8a9?iz<Xweo2p=Ei$3$Zm}Nk');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
