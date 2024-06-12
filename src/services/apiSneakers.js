import supabase, { supabaseUrl } from './supabase';

export const getSneakers = async (id) => {
  const { data, error } = await supabase
    .from('sneakers_31')
    .select('*')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
};
