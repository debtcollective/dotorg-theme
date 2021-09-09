<?php
/**
 * WP Action Network Events
 *
 * @package   Site_Functionality
 */
namespace Site_Functionality\Abstracts;

/**
 * The Base class which can be extended by other classes to load in default methods
 *
 * @package Site_Functionality\Common\Abstracts
 * @since 1.0.0
 */
abstract class Base {

	/**
	 * @var array : will be filled with data from the plugin config class
	 * @see Plugin
	 */
	protected $plugin = [];

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * The status.
	 *
	 * @since    1.0.0
	 * @access   public
	 * @var      array    $status 
	 */
	public $status;

	/**
	 * The errors.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      array    $errors 
	 */
	protected $errors;


	/**
	 * Base constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct( $version , $plugin_name ) {
		$this->version = $version;
		$this->plugin_name = $plugin_name;
		// $this->init();
		// self::instantiate();
	}

	/**
	 * @return self
	 * @since 1.0.0
	 */
	final public static function instantiate(): self {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function init() {}

	/**
	 * Handle Errors
	 *
	 * @return void
	 */
	protected function handleError( $exception ) {
		$this->errors[] = $exception;
		// throw new \Exception( $exception );
	}

	/**
	 * Set processing status
	 *
	 * @param string $prop
	 * @param mixed $value
	 * @return void
	 */
	public function setStatus( $prop, $value ) {
		$this->status[$prop] = $value;
	}

	/**
	 * Get processing status
	 *
	 * @param string $prop
	 * @param mixed $value
	 * @return array $this->status
	 */
	public function getStatus() {
		return $this->status;
	}
}
