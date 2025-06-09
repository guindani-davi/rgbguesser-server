SET
  check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_active_connections () RETURNS BIGINT LANGUAGE plpgsql AS $function$BEGIN
  RETURN (
    SELECT count(*) 
    FROM pg_stat_activity 
    WHERE datname = current_database()
      AND state = 'active'
  );
END;$function$;

CREATE OR REPLACE FUNCTION public.get_db_version () RETURNS TEXT LANGUAGE plpgsql AS $function$
BEGIN
  RETURN version();
END;
$function$;

CREATE OR REPLACE FUNCTION public.get_max_connections () RETURNS INTEGER LANGUAGE plpgsql AS $function$
BEGIN
  RETURN current_setting('max_connections')::INTEGER;
END;
$function$;
